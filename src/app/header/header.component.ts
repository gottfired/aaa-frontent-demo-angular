import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Output() toggleSidebar: EventEmitter<any> = new EventEmitter();

  get pages() {
    return [{
      link: '/',
      title: 'Home'
    },
    {
      link: '/feed',
      title: 'Feed'
    }];
  }

  ngOnInit() {
  }

  onClick = async () => {
    this.toggleSidebar.emit(null);
  }
}
