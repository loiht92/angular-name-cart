import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy {
  private intervalId = 0;
  message = '';
  remainingTime: number;

  @Input() seconds = 11;
  constructor() { }

  clearTime(){ // Trở về giá trị ban đầu.//
    clearInterval(this.intervalId);
  }

  ngOnInit(): void {
    this.reset();
    this.start();
  }

  ngOnDestroy(): void {
    this.clearTime();
  }

  start() {
    this.countdown();
    if (this.remainingTime <= 0) {
      this.remainingTime = this.seconds;
    }
  }
  stop() {
    this.clearTime();
    this.message = `Holding at T-${this.remainingTime} seconds`;
  }
  reset() {
    this.clearTime();
    this.remainingTime = this.seconds;
    this.message = `Click start button to start the Countdown`;
  }

  private countdown() {
    this.clearTime();
    this.intervalId = window.setInterval(() => {
      this.remainingTime -= 1;
      if (this.remainingTime === 0) {
        this.message = 'Blast off!';
        this.clearTime();
      } else {
        this.message = `T-${this.remainingTime} seconds and counting`;
      }
    }, 1000);
  }

}
