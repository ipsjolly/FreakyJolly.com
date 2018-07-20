import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../game';
import { DataService } from '../data.service';



@Component({
  selector: 'app-show-selected-games',
  templateUrl: './show-selected-games.component.html',
  styleUrls: ['./show-selected-games.component.css']
})
export class ShowSelectedGamesComponent implements OnInit {
  @Input() selectedGames: Game;

  constructor(public dataService:DataService) { }

  ngOnInit() {
  }



}
