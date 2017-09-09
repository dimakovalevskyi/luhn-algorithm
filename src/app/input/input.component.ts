import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValuesService } from './../values.service'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  constructor(
    protected values: ValuesService
  ) { }

  number: string = '';

  protected isValidInteger(number) {
     return !isNaN( + number) && number.indexOf('.') === -1
  }

  errorStateMatcher = (control: FormControl) => {
    return control.dirty && ! this.isValidInteger(this.number);
  };

  check = () => {
    this.values.setValue(this.number, this.isValidInteger(this.number), true);
  }
}
