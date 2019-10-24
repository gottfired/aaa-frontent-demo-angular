import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BeersService } from '../services/beers.service';
import { GlobalUiService } from '../services/global-ui.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.scss']
})
export class BeerDetailComponent implements OnInit, OnDestroy {

  beerId: number;

  formGroup = new FormGroup({
    comment: new FormControl(''),
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public beersService: BeersService,
    private translateService: TranslateService,
    private globalUiSrvice: GlobalUiService
  ) { }

  async ngOnInit() {
    // Taken from here https://medium.com/@christo8989/angular-6-url-parameters-860db789db85
    this.route.params.subscribe(async routeParams => {
      this.beerId = Number(routeParams.id);
      await this.beersService.selectBeerById(this.beerId);
      if (!this.beersService.selectedBeer) {
        this.globalUiSrvice.showError(this.translateService.instant('error.beerNotFound'));
      }
    });
  }

  ngOnDestroy() {
    console.log('### leave beer detail');
    this.beersService.deselectBeer();
  }

  get imageUrl() {
    return this.beersService.selectedBeer.image_url;
  }

  get name() {
    return this.beersService.selectedBeer.name;
  }

  get tagline() {
    return this.beersService.selectedBeer.tagline;
  }

  get contributedBy() {
    return this.beersService.selectedBeer.contributed_by;
  }

  get foodPairing() {
    return this.beersService.selectedBeer.food_pairing;
  }

  onNext = () => {
    const next = Math.max(1, (this.beerId + 1) % (this.beersService.beers.length + 1));
    this.router.navigate(['/beer', next]);
  }

  onPrevious = () => {
    let previous = (this.beerId - 1) % this.beersService.beers.length;
    if (previous <= 0) {
      previous = this.beersService.beers.length;
    }
    this.router.navigate(['/beer', previous]);
  }

  toggleLike = () => {
    this.beersService.toggleLike(this.beerId);
  }

  get likeColor() {
    return this.beersService.isLikedBeer(this.beerId) ? 'red' : '#ccc';
  }
  get likeLabel() {
    return this.beersService.isLikedBeer(this.beerId) ? 'Gefällt mir' : '';
  }

  onSubmit = () => {
    console.log('### comment', this.formGroup.value);
  }
}



