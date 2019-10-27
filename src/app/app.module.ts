import { registerLocaleData } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import localeDe from '@angular/common/locales/de';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentContainerComponent } from './content-container/content-container.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { MaterialModule } from './material/material.module';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { CacheWipeConfirmationComponent } from './cache-wipe-confirmation/cache-wipe-confirmation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BeerListItemComponent } from './beer-list-item/beer-list-item.component';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

registerLocaleData(localeDe, 'de');


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    ContentContainerComponent,
    BeerListComponent,
    BeerDetailComponent,
    PageNotFoundComponent,
    LoadingIndicatorComponent,
    CacheWipeConfirmationComponent,
    BeerListItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CacheWipeConfirmationComponent]
})
export class AppModule { }
