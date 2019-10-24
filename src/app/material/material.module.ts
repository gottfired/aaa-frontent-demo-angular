import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatSnackBarModule,
  MatDialogModule
} from '@angular/material';

const usedModules = [
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatSnackBarModule,
  MatDialogModule
];

@NgModule({
  imports: usedModules,
  exports: usedModules
})
export class MaterialModule { }
