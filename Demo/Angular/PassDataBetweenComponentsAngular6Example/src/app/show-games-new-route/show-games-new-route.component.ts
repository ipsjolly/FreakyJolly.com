import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from '../data.service';
import { Game } from '../game';

@Component({
  selector: 'app-show-games-new-route',
  templateUrl: './show-games-new-route.component.html',
  styleUrls: ['./show-games-new-route.component.css']
})
export class ShowGamesNewRouteComponent implements OnInit {
  @Input() selectedGames: Game;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    public dataService:DataService
  ) { }

  ngOnInit() {
  }

  
}
