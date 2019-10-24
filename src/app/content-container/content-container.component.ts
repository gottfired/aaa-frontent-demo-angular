import { Component, OnInit } from '@angular/core';
import { NavigationPagesService } from '../services/navigation-pages.service';
import { BeersService } from '../services/beers.service';

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.scss']
})
export class ContentContainerComponent implements OnInit {

  constructor(
    public navigationPages: NavigationPagesService,
    private beersService: BeersService
  ) {
  }

  async ngOnInit() {
    await this.beersService.getBeers();
  }

}
