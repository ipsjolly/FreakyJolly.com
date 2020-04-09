import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  getFilterObject(fullObj, key) {
    const uniqChk = [];
    _.filter(fullObj, (obj) => {
      if (!_.includes(uniqChk, obj[key])) {
        uniqChk.push(obj[key]);
      }
      return obj;
    });
    return uniqChk;
  }
}
