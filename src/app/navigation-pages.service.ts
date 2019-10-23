import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationPagesService {

  constructor() { }

  pages = [
    {
      link: '/',
      title: 'nav.home',
      show: true,
    },
    {
      link: '/beers',
      title: 'nav.beers',
      show: true,
    },
    {
      link: '/beer',
      title: 'nav.beer',
      show: false,
    }
  ];

  get publicPages() {
    return this.pages.filter(p => p.show);
  }
}
