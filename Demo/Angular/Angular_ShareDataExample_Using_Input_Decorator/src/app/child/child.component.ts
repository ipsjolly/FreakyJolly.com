import { Component, OnInit, Input } from '@angular/core';
import { Child } from '../child';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() childlist: Child;

  constructor() { }

  ngOnInit() {
  }

}
