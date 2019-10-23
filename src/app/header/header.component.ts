import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavigationPagesService } from '../navigation-pages.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public navigationPages: NavigationPagesService,
    private router: Router,
    private translateService: TranslateService
  ) {
  }

  @Output() toggleSidebar: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
  }

  onClick = async () => {
    this.toggleSidebar.emit(null);
  }

  get title() {
    const baseUrl = `/${this.router.url.split('/')[1]}`;
    const found = this.navigationPages.pages.find((page) => page.link === baseUrl);
    return found ? this.translateService.instant(found.title) : this.translateService.instant('error.pageNotFound.title');
  }
}
