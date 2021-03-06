import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatSnackBarModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
} from '@angular/material';

const usedModules = [
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatSnackBarModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  imports: usedModules,
  exports: usedModules
})
export class MaterialModule { }
