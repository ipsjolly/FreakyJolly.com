import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-httpclient-demo';

  checkboxes = [
    {
      id:1,
      name:"Item 1"
    },{
      id:2,
      name:"Item 2"
    },{
      id:3,
      name:"Item 3"
    },{
      id:4,
      name:"Item 4"
    }
  ]



}
