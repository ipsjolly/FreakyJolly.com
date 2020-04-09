// scrollprogress.directive.ts
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appScollprogress]'
})
export class ScollprogressDirective {

  constructor() { }

  @HostListener('scroll', ['$event'])
  doSomething(event) {

    var winScroll = event.currentTarget.scrollTop;
    var height = event.currentTarget.scrollHeight - event.currentTarget.clientHeight;
    var scrolled = (winScroll / height) * 100;

    console.debug("Scroll %", scrolled);
    document.getElementById("scrollBar").style.width = scrolled + "%";
  }
}
