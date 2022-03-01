import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() firedInterval = new EventEmitter<number>();
  interval: any;
  lastNumber: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  onGameStart() {
    this.interval = setInterval(() => {
      this.firedInterval.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000)
  }

  onStopGame() {
    clearInterval(this.interval)
  }

}
