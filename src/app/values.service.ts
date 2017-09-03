import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject'

@Injectable()
export class ValuesService {

  constructor() { }

  protected subject: Subject<any> = new Subject();

  protected isVaid: boolean = true;
  protected number: number;
  protected luhnResult: boolean = false;

  public getSubscription() {
    return this.subject.asObservable();
  }

  public setValue(currentNumber, currentValidity) {
    this.number = currentNumber;
    this.isVaid = currentValidity;

    this.subject.next({
      isValid: this.isVaid,
      number: this.number,
    });
  }

}
