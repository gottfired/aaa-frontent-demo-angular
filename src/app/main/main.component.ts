import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  secondsSinceStart = 0;

  constructor() { }

  incrementTimer() {
    this.secondsSinceStart++;
    setTimeout(this.incrementTimer, 1000);
  }

  ngOnInit() {
    this.incrementTimer();
  }

}
