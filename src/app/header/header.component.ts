import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavigationPagesService } from '../navigation-pages.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public navigationPages: NavigationPagesService
  ) { }

  @Output() toggleSidebar: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
  }

  onClick = async () => {
    this.toggleSidebar.emit(null);
  }
}
