import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValuesService } from './../values.service'
import { LuhnService } from './../luhn.service'

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

  errorStateMatcher(control: FormControl) {
    return control.dirty && (!LuhnService.isValidInteger(control.value));
  };

  check() {
    this.values.setValue(this.number, LuhnService.isValidInteger(this.number), LuhnService.check(this.number));
  };
}
