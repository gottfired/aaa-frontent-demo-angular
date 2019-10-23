import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BeersService } from '../beers.service';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.scss']
})
export class BeerDetailComponent implements OnInit {

  beerId: number;

  constructor(
    private route: ActivatedRoute,
    private beersService: BeersService
  ) { }

  ngOnInit() {
    // Taken from here https://medium.com/@christo8989/angular-6-url-parameters-860db789db85
    this.beerId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    console.log('### beer', this.beerId);
  }

  get details() {
    if (this.beerId) {
      return JSON.stringify(
        this.beersService.beers.find(entry => entry.id === this.beerId), null, 4
      );
    }
  }

}
