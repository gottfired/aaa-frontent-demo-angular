import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './feed/feed.component';


const routes: Routes = [
  { path: 'feed', component: FeedComponent, pathMatch: 'full' },
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
