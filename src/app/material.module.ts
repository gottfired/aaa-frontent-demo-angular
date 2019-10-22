import { NgModule } from '@angular/core';
import {
  MatCardModule
} from '@angular/material';

const usedModules = [
  MatCardModule
];

@NgModule({
  imports: usedModules,
  exports: usedModules
})
export class MaterialModule { }
