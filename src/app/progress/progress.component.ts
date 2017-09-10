import { Component } from '@angular/core';

import { ValuesService } from './../values.service'

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {

  constructor(
    protected values: ValuesService
  ) {
    this.values.getSubscription().subscribe((data) => {
      this.color = data.isValidFormat ? 'primary' : 'warn';
      this.value = (data.number.length / 16) * 100 ;
    })
  }

  color: string = 'primary';
  value: number = 0;

}
