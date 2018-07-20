import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-filter-nselect-games',
  templateUrl: './filter-nselect-games.component.html',
  styleUrls: ['./filter-nselect-games.component.css']
})
export class FilterNSelectGamesComponent implements OnInit {

  constructor(public dataService:DataService) {}

  ngOnInit() {
    this.dataService.getSelectedGames();
  }

}
