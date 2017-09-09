import { Component } from '@angular/core';
import { ValuesService } from './../values.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor(
    protected values: ValuesService
  ) {
    this.values.getSubscription().subscribe((data) => {
      this.color = data.isValid ? 'primary' : 'warn';
    })
  }

  color: string = 'primary';

}
