import { Component, OnInit } from '@angular/core';
import { BeersService } from '../services/beers.service';
import { Router } from '@angular/router';
import { IBeer } from '../types/Beer';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    public beersService: BeersService,
    private router: Router
  ) {
  }


  ngOnInit() {
  }

  get favorites() {
    return this.beersService.likedBeers;
  }

  selected = (beer: IBeer) => {
    this.router.navigate(['/beer', beer.id]);
  }
}
