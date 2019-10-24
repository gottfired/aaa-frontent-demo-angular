import { Component, OnInit } from '@angular/core';
import { NavigationPagesService } from '../services/navigation-pages.service';

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.scss']
})
export class ContentContainerComponent implements OnInit {

  constructor(
    public navigationPages: NavigationPagesService,
  ) {
  }

  ngOnInit() {
  }

}
