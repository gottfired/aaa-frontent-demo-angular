import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class GlobalUiService {

  isLoading = false;

  constructor(
    private snackBar: MatSnackBar,
  ) { }

  showError(message: string) {
    const config = new MatSnackBarConfig();
    config.duration = 3000;
    config.panelClass = ['error-snackbar'];
    this.snackBar.open(message, undefined, config);
  }
}
