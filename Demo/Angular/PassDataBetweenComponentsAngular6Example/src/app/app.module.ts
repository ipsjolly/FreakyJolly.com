import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterPipe} from './app.filter';

import { AppComponent } from './app.component';
import { AppRoutingModule }  from './app-routing.module';
import { ShowSelectedGamesComponent } from './show-selected-games/show-selected-games.component';
import { ShowGamesNewRouteComponent } from './show-games-new-route/show-games-new-route.component';
import { FilterNSelectGamesComponent } from './filter-nselect-games/filter-nselect-games.component';


@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    ShowSelectedGamesComponent,
    ShowGamesNewRouteComponent,
    FilterNSelectGamesComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
