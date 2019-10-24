import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { BeersService } from '../services/beers.service';
import { NavigationPagesService } from '../services/navigation-pages.service';

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.scss']
})
export class ContentContainerComponent implements OnInit {

  @ViewChild('sidenav', { static: false }) sidenavRef: MatSidenav;

  constructor(
    public navigationPages: NavigationPagesService,
    private beersService: BeersService
  ) {
  }

  async ngOnInit() {
    await this.beersService.getBeers();
  }

  onClick = (page) => {
    this.sidenavRef.close();
    if (page.onClick) {
      page.onClick();
    }
  }

}
