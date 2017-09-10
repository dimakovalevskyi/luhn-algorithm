import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject'

@Injectable()
export class ValuesService {

  constructor() { }

  protected subject: Subject<any> = new Subject();

  public getSubscription() {
    return this.subject.asObservable();
  }

  public setValue(currentNumber, currentValidity, luhnResult) {
    this.subject.next({
      number: currentNumber,
      isValidFormat: currentValidity,
      isValidLuhn: luhnResult,
    });
  }

}
