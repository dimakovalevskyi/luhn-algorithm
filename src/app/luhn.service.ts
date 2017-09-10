import { Injectable } from '@angular/core';

@Injectable()
export class LuhnService {

  constructor() { }

  private static isEven (num: number|string) {
    if (typeof num === 'string') {
      num = parseInt(num, 10);
    }

    return !(num % 2);
  }

  private static transformStringIntoArray (num: string) {
    const array: Array<number> = [];

    for (let i = 0 ; i < num.length ; i++) {
      array.push(parseInt(num[i], 10));
    }

    return array;
  }

  public static isValidInteger(number) {
    return !isNaN( + number) && number.indexOf('.') === -1 && number.indexOf(' ') === -1;
 }

  public static check(number: string) {
    if (!this.isValidInteger(number)) {
      return false;
    }

    let array: Array<number> = this.transformStringIntoArray(number);
    const length: number = array.length;

    if (length === 0) {
      return false;
    }

    array = array.map((item, index) => {
      if (this.isEven(index)) {
        item = item * 2;

        if (item > 9) {
          item = item - 9;
        }
      }
      return item
    });

    let summ = array.reduce((sum, currentItem) => {
      return sum + currentItem;
    });

    return !(summ % 10);
  }

}
