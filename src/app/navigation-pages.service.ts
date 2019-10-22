import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationPagesService {

  constructor() { }

  pages = [
    {
      link: '/',
      title: 'nav.home'
    },
    {
      link: '/feed',
      title: 'nav.feed'
    }
  ];
}
