import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatSnackBarModule
} from '@angular/material';

const usedModules = [
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatSnackBarModule
];

@NgModule({
  imports: usedModules,
  exports: usedModules
})
export class MaterialModule { }
