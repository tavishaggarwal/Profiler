import { Component, Input, AfterViewInit } from '@angular/core';
import * as jQuery from 'jquery';

@Component({
  selector: 'profile-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit {

 toggle () {
    $('#bodyWrapper').toggleClass('showaside backgroundImage');
    $('#toggle').toggleClass('showasideToggle');
    $('#menu').toggleClass('hide');
    $('#header').toggleClass('header hide');
    $('#bio').toggleClass('hide');
    $('body').toggleClass('backgroundImage');
    $('.container').toggleClass('hide');
 }

 toggleRefresh () {
   if ('/Home' !== window.location.pathname ) {
     if ('/' !== window.location.pathname ) {
        $('#bio').toggleClass('hide');
        $('#toggle').toggleClass('showasideToggle');
        $('#header').toggleClass('header hide');
     }
   }
 }

 adjustWidth () {
   $('#bodyWrapper').addClass('showaside backgroundImage');
 }

   ngAfterViewInit() {
    this.toggleRefresh();
  }
}

