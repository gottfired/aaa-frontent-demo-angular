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
import { FeedComponent } from './feed/feed.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { MaterialModule } from './material/material.module';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

registerLocaleData(localeDe, 'de');


@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    MainComponent,
    HeaderComponent,
    ContentContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
