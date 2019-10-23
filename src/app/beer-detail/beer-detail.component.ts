import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BeersService } from '../beers.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.scss']
})
export class BeerDetailComponent implements OnInit {

  beerId: number;

  constructor(
    private route: ActivatedRoute,
    private beersService: BeersService,
    private translateService: TranslateService

  ) { }

  async ngOnInit() {
    // Taken from here https://medium.com/@christo8989/angular-6-url-parameters-860db789db85
    this.beerId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    await this.beersService.selectBeerById(this.beerId);
  }

  get details() {
    if (this.beersService.selectedBeer) {
      return JSON.stringify(
        this.beersService.selectedBeer, null, 4
      );
    } else {
      return this.translateService.instant('error.beerNotFound');
    }
  }

}
