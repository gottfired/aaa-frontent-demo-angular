import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IBeer } from '../types/Beer';
import { Router } from '@angular/router';
import { BeersService } from '../services/beers.service';




@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {

  constructor(
    public beersService: BeersService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  selected = (beer: IBeer) => {
    this.router.navigate(['/beer', beer.id]);
  }

}
