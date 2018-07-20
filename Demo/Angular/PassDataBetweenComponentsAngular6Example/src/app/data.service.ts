import { Injectable } from '@angular/core';


import { Game } from './game';
import { GAMES } from './mock-games';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  searchText:String = "";
  selected_games: Game[];
  all_games: Game[];
  selected_count:number = 1;

  constructor() { 
    this.all_games = GAMES;
  }

  getGames(){
    return this.all_games;
  }

  setSearchTerm(term:String){
    this.searchText = term;
  }
  
  getSearchTerm(){
    return this.searchText;
  }

  setSelectedGames(selectedGames:Game[]){
    this.selected_games = selectedGames;
  }
  
  getSelectedGames(){
    this.selected_count = 0;
    this.selected_games = this.all_games.filter( g => {
      if(g.selected)
      this.selected_count++;

      return (g.selected);
    });
  }

  deleteGame(id:number){
    this.setSelectedGames(this.getGames().filter( g => {
      if(g.id == id)
      g.selected = false;
      
      return true;
    }));
    return this.getSelectedGames();
  }

  clearFilter(){
    this.selected_count = 0;
    this.selected_games = this.all_games.filter( g => {
      g.selected = false;

      return (g.selected);
    });
  }

  clearSelection(){
    this.searchText = "";
  }


}
