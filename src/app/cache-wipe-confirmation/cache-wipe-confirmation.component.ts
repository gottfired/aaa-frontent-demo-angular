import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { BeersService } from '../services/beers.service';

@Component({
  selector: 'app-cache-wipe-confirmation',
  templateUrl: './cache-wipe-confirmation.component.html',
  styleUrls: ['./cache-wipe-confirmation.component.scss']
})
export class CacheWipeConfirmationComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<CacheWipeConfirmationComponent>,
    private beersService: BeersService
  ) { }

  ngOnInit() {
  }

  onClose = async (wipe: boolean) => {
    this.dialogRef.close();

    if (wipe) {
      await this.beersService.clearLocalData();
    }
  }


}
