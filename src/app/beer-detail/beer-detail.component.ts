import { Component, OnDestroy, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BeersService } from '../services/beers.service';
import { GlobalUiService } from '../services/global-ui.service';
import { FormControl, Validators, FormGroup, AbstractControl } from '@angular/forms';


const noLeadingOrTrailingSpace = (control: AbstractControl): { [key: string]: any } | null => {
  return control.value !== control.value.trim() ?
    { leadingOrTrailingSpace: { value: control.value } } :
    null;
};


@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.scss']
})
export class BeerDetailComponent implements OnInit, OnDestroy {

  beerId: number;

  formGroup = new FormGroup({
    comment: new FormControl('', [
      Validators.maxLength(35),
      noLeadingOrTrailingSpace
    ]),
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

  toggleLike = async () => {
    await this.beersService.toggleLike(this.beerId);
  }

  get likeColor() {
    return this.beersService.isLikedBeer(this.beerId) ? 'red' : '#ccc';
  }

  get likeLabel() {
    const likes = this.beersService.beersInfo.globalLikes[this.beerId];
    let label = likes !== undefined ? likes.toString() + ' ' : '';
    if (this.beersService.isLikedBeer(this.beerId)) {
      label += 'Gefällt mir';
    }

    return label;
  }

  get maxLengthFailed() {
    return this.formGroup.get('comment').invalid && this.formGroup.get('comment').errors.maxlength;
  }

  get leadingOrTrailingSpace() {
    return this.formGroup.get('comment').invalid && this.formGroup.get('comment').errors.leadingOrTrailingSpace;
  }


  onSubmit = async () => {
    if (this.formGroup.valid) {
      console.log('### comment', this.formGroup.value.comment);
      await this.beersService.setComment(this.beerId, this.formGroup.value.comment);
      this.formGroup.get('comment').setValue('');
    } else {
      console.log('### validation error', this.formGroup.get('comment').errors);
    }
  }

  get comments() {
    return this.beersService.beersInfo &&
      this.beersService.beersInfo.globalComments[this.beerId];
  }
}



