import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShowGamesNewRouteComponent }   from './show-games-new-route/show-games-new-route.component';
import { FilterNSelectGamesComponent } from './filter-nselect-games/filter-nselect-games.component';


const routes: Routes = [
  { path: '', redirectTo: '/filterGames', pathMatch: 'full' },
  { path: 'savedGames', component: ShowGamesNewRouteComponent },
  { path: 'filterGames', component: FilterNSelectGamesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}