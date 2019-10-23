import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IBeer } from '../types/Beer';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {

  beers: IBeer[];

  constructor(
    private http: HttpClient,
  ) { }

  async ngOnInit() {
    await this.getBeers();
  }

  getBeers = async () => {
    try {
      const res = await this.http.get('https://api.punkapi.com/v2/beers').toPromise();
      this.beers = res as any;
      console.log('### Loaded beers', this.beers);
    } catch (err) {
      console.error('### Error getting beers', err);
      throw err;
    }
  }

}
