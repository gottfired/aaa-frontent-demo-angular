import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeerListComponent } from './beer-list/beer-list.component';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';


const routes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full' },
  { path: 'beers', component: BeerListComponent },
  { path: 'beer/:id', component: BeerDetailComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      // Scroll to top: https://stackoverflow.com/a/44372167/677910
      scrollPositionRestoration: 'enabled'
      // enableTracing: true
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
