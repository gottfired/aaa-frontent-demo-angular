import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBeer } from './types/Beer';
import { GlobalUiService } from './global-ui.service';

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
  selectedBeer?: IBeer;

  constructor(
    private http: HttpClient,
    private globalUi: GlobalUiService
  ) { }


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
}
