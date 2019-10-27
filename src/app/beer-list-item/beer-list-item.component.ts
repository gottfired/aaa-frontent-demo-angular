import { Component, OnInit, Input } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { IBeer } from '../types/Beer';
import { BeersService } from '../services/beers.service';

@Component({
  selector: 'app-beer-list-item',
  templateUrl: './beer-list-item.component.html',
  styleUrls: ['./beer-list-item.component.scss']
})
export class BeerListItemComponent implements OnInit {

  @Input() beer: IBeer;

  constructor(
    public beersService: BeersService
  ) { }

  ngOnInit() {
  }


  getLikeColor(beerId: number) {
    return this.beersService.isLikedBeer(beerId) ? 'red' : '#ccc';
  }

  getLikeCount(beerId: number) {
    return this.beersService.beersInfo && this.beersService.beersInfo.globalLikes[beerId];
  }
}
