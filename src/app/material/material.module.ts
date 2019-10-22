import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatToolbarModule,
} from '@angular/material';

const usedModules = [
  MatCardModule,
  MatToolbarModule,
];

@NgModule({
  imports: usedModules,
  exports: usedModules
})
export class MaterialModule { }
