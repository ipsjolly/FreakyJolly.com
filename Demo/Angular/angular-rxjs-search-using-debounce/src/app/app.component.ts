// app.component.ts
import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { of } from "rxjs";
import {
  debounceTime,
  map,
  distinctUntilChanged,
  filter
} from "rxjs/operators";
import { fromEvent } from 'rxjs';
import { HttpClient, HttpParams } from "@angular/common/http";

const APIKEY = "e8067b53";

const PARAMS = new HttpParams({
  fromObject: {
    action: "opensearch",
    format: "json",
    origin: "*"
  }
});

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {

  @ViewChild('movieSearchInput', { static: true }) movieSearchInput: ElementRef;
  apiResponse: any;
  isSearching: boolean;

  constructor(
    private httpClient: HttpClient
  ) {
    this.isSearching = false;
    this.apiResponse = [];

    console.log(this.movieSearchInput);
  }

  ngOnInit() {

    console.log(this.movieSearchInput);



    fromEvent(this.movieSearchInput.nativeElement, 'keyup').pipe(

      // get value
      map((event: any) => {
        return event.target.value;
      })
      // if character length greater then 2
      , filter(res => res.length > 2)

      // Time in milliseconds between key events
      , debounceTime(1000)

      // If previous query is diffent from current   
      , distinctUntilChanged()

      // subscription for response
    ).subscribe((text: string) => {

      this.isSearching = true;

      this.searchGetCall(text).subscribe((res) => {
        console.log('res', res);
        this.isSearching = false;
        this.apiResponse = res;
      }, (err) => {
        this.isSearching = false;
        console.log('error', err);
      });

    });
  }

  searchGetCall(term: string) {
    if (term === '') {
      return of([]);
    }
    return this.httpClient.get('http://www.omdbapi.com/?s=' + term + '&apikey=' + APIKEY, { params: PARAMS.set('search', term) });
  }

}
