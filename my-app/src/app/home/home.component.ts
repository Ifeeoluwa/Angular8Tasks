import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  clickCounter: number = 0;
  clickstop = 0;
  name: string = 'hey';

  constructor() {}

  ngOnInit(): void {}

  countClick() {
    // this.clickCounter +=1;
    if(this.clickstop !=10){
      this.clickstop += 1;
      this.clickCounter=this.clickstop;
    }
  }
  countClick2() {
    // this.clickCounter -= 1;
    if(this.clickstop !=-10){
      this.clickstop -= 1;
      this.clickCounter=this.clickstop;
    }
  }

  setClasses () {
    let myClasses = {
      active: this.clickCounter > 4,
      midactive: this.clickCounter < 0,
      notactive: this.clickCounter <= 4,
    }
    return myClasses;
  }

}
