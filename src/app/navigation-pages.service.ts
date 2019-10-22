import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationPagesService {

  constructor() { }

  pages = [
    {
      link: '/',
      title: 'Home'
    },
    {
      link: '/feed',
      title: 'Feed'
    }
  ];
}
