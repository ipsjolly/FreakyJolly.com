import { Injectable } from '@angular/core';

import { Observable,of } from 'rxjs';

import { Parent } from './parent';
import { Child } from './child';
import { PARENTS } from './mock-parents';
import { CHILDREN } from './mock-children';


@Injectable({providedIn:'root'})
export class DataService{
    constructor(){}


    getParents():Observable<Parent[]>{
        return of(PARENTS);
    }

    getChildren(parentSetId: number):Child[]{
        return CHILDREN.filter(Child => Child.parentSetId === parentSetId);
    }


}