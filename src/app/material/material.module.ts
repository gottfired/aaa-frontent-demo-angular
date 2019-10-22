import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule
} from '@angular/material';

const usedModules = [
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule
];

@NgModule({
  imports: usedModules,
  exports: usedModules
})
export class MaterialModule { }
