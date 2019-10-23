import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBeer } from './types/Beer';
import { GlobalUiService } from './global-ui.service';



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

      let res;
      if (USE_MOCK) {
        res = await this.http.get('assets/beers.json').toPromise();
      } else {
        res = await this.http.get('https://api.punkapi.com/v2/beers').toPromise();
      }

      this.beers = res as any;

      // Sort alphabetically
      this.beers = this.beers.sort((lhs, rhs) => {
        return lhs.name > rhs.name ? 1 : -1;
      });

      console.log('### Loaded beers', this.beers);
    } catch (err) {
      console.error('### Error getting beers', err);
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
