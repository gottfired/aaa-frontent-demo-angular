import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full' },
  { path: 'feed', component: FeedComponent },
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
