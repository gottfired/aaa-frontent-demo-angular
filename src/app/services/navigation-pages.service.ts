import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CacheWipeConfirmationComponent } from '../cache-wipe-confirmation/cache-wipe-confirmation.component';

@Injectable({
  providedIn: 'root'
})
export class NavigationPagesService {

  constructor(
    public dialog: MatDialog
  ) { }

  pages = [
    {
      link: '/',
      title: 'nav.home',
      show: true,
      onClick: () => { }
    },
    {
      link: '/beers',
      title: 'nav.beers',
      show: true,
      onClick: () => { }
    },
    {
      link: '/beer',
      title: 'nav.beer',
      show: false,
      onClick: () => { }
    },
    {
      title: 'nav.wipe',
      show: true,
      onClick: () => {
        const dialogRef = this.dialog.open(CacheWipeConfirmationComponent, {
          width: '320px'
        });

        dialogRef.afterClosed().subscribe(result => {
          // Handle any closing tasks here
        });
      }
    }
  ];

  get publicPages() {
    return this.pages.filter(p => p.show);
  }
}
