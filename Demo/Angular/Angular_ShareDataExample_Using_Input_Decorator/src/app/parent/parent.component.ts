import { Component, OnInit } from '@angular/core';

import { Parent } from '../parent';

import { DataService } from '../data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  selectedParent : Parent;
  parentList: Parent[];
  selectedChildren: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getParents();
    this.selectedParent = this.parentList[0];
    this.getChildren(this.selectedParent.Id);
  }


  onSelectList(parent:Parent):void{
    this.selectedParent = parent;
    this.getChildren(this.selectedParent.Id);
  }

  getParents():void{
    this.dataService.getParents().subscribe(parentList => this.parentList = parentList);
  }

  getChildren(parentSetId:number):void{
    this.selectedChildren = this.dataService.getChildren(parentSetId);
  }


}
