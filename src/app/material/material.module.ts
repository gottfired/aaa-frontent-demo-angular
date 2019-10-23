import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule
} from '@angular/material';

const usedModules = [
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule
];

@NgModule({
  imports: usedModules,
  exports: usedModules
})
export class MaterialModule { }
