import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterPipe} from './app.filter';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    FilterPipe 
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
