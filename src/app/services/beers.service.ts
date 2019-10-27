import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBeer, IBeersInfo } from '../types/Beer';
import { GlobalUiService } from './global-ui.service';
import { LocalStorageService } from './local-storage.service';
import { BASE_URL, AuthService } from './auth.service';



async function sleep(milliseconds: number) {
  return new Promise(resolve => {
    setTimeout(() => resolve(), milliseconds);
  });
}

const USE_MOCK = true;

@Injectable({
  providedIn: 'root'
})
export class BeersService {
  beers: IBeer[];

  // Local data
  selectedBeer?: IBeer;
  likedBeerIDs: number[] = [];
  comments: any = {};

  // Global data
  beersInfo: IBeersInfo;


  constructor(
    private http: HttpClient,
    private globalUi: GlobalUiService,
    private localStorage: LocalStorageService,
    private authService: AuthService
  ) {
    this.likedBeerIDs = this.localStorage.getFavorites() || [];
    this.comments = this.localStorage.getComments() || {};
  }


  getBeers = async () => {
    try {
      this.globalUi.isLoading = true;

      let res;
      if (USE_MOCK) {
        res = await this.http.get('assets/beers.json').toPromise();
      } else {
        res = await this.http.get('https://api.punkapi.com/v2/beers').toPromise();
      }

      // Fake slow network
      await sleep(500);

      this.beers = res as any;

      this.globalUi.isLoading = false;

      // Sort alphabetically
      this.beers = this.beers.sort((lhs, rhs) => {
        return lhs.name > rhs.name ? 1 : -1;
      });

      console.log('### Loaded beers', this.beers);

      await this.getBeersInfo();


    } catch (err) {
      console.error('### Error getting beers', err);
      this.globalUi.isLoading = false;
      this.globalUi.showError('Error getting beers');
      throw err;
    }
  }

  selectBeerById = async (beerId: number) => {
    if (!this.beers) {
      await this.getBeers();
    }

    this.selectedBeer = this.beers.find(entry => entry.id === beerId);
  }

  deselectBeer() {
    this.selectedBeer = undefined;
  }

  isLikedBeer(beerId: number) {
    return this.likedBeerIDs.indexOf(beerId) >= 0;
  }

  async toggleLike(beerId: number) {
    const index = this.likedBeerIDs.indexOf(beerId);
    if (index >= 0) {
      this.likedBeerIDs.splice(index, 1);
    } else {
      this.likedBeerIDs.push(beerId);
    }

    this.localStorage.setFavorites(this.likedBeerIDs);

    await this.postData();
  }

  get likedBeers() {
    if (this.beers) {
      return this.likedBeerIDs.map(id => this.beers.find(b => b.id === id));
    } else {
      return [];
    }
  }

  async clearLocalData() {
    // Clear everything
    this.localStorage.cleanAll();
    this.selectedBeer = undefined;
    this.likedBeerIDs = [];

    // Now reload
    await this.getBeers();
  }

  async setComment(beerId: number, comment: string) {
    if (!comment) {
      delete this.comments[beerId];
    } else {
      this.comments[beerId] = comment;
    }

    this.localStorage.setComments(this.comments);

    await this.postData();
  }

  postData = async () => {
    if (!this.authService.isAuthenticated) {
      return;
    }

    console.log('### postData');

    try {
      this.globalUi.isLoading = true;
      const res = await this.http.patch(BASE_URL + '/app/v1/user/profile', {
        data: {
          commentsMap: this.comments,
          likedBeerIds: this.likedBeerIDs
        }
      }, {
        headers: {
          Authorization: 'Bearer ' + this.authService.credentials.accessToken,
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }).toPromise();

      console.log('### postData', res);

      this.globalUi.isLoading = false;
    } catch (err) {
      this.globalUi.isLoading = false;
      this.globalUi.showError('Post data error ' + err);
    }
  }

  getBeersInfo = async () => {
    if (!this.authService.isAuthenticated) {
      return;
    }

    try {
      this.globalUi.isLoading = true;
      this.beersInfo = await this.http.get(BASE_URL + '/app/v1/beers-info').toPromise() as IBeersInfo;
      this.globalUi.isLoading = false;
      console.log('### getBeersInfo', this.beersInfo);
    } catch (err) {
      this.globalUi.isLoading = false;
      this.globalUi.showError('Get beers info ' + err);
    }
  }

}

