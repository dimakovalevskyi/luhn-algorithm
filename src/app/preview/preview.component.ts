import { Component } from '@angular/core';
import { ValuesService } from './../values.service'

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent {

  constructor(
    protected values: ValuesService
  ) {
    this.values.getSubscription().subscribe((data) => {
      this.lenght = data.number.length;
      this.luhnResult = data.isValidLuhn;
      this.validFormat = data.isValidFormat;

      if (this.lenght === 16 && this.validFormat) {
        this.title = this.luhnResult ? 'This is valid credit card number' : 'This is invalid credit card number';
      } else {
        this.title = 'Enter valid format (16 digits)';
      }
    })
   }

  title = 'Enter valid format (16 digits)';
  lenght = 0;
  luhnResult = false;
  validFormat = false;

}
