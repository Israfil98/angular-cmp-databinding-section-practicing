import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddsArray: number[] = [];
  evensArray: number[] = [];

  onFiredInterval(firedNum: number) {
    console.log(firedNum)
    if (firedNum % 2 === 0) {
      this.evensArray = [...this.evensArray, firedNum]
    } else {
      this.oddsArray = [...this.oddsArray, firedNum]
    }
  }
}

