import { Component, OnInit } from '@angular/core';
import { GlobalUiService } from '../global-ui.service';

@Component({
  selector: 'app-loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.scss']
})
export class LoadingIndicatorComponent implements OnInit {

  constructor(
    public globalUi: GlobalUiService
  ) { }

  ngOnInit() {
  }

}
