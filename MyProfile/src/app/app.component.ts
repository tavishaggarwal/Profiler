import { Component } from '@angular/core';
import * as jQuery from 'jquery';

@Component({
  selector: 'profile-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

 toggle () {
    $('#bodyWrapper').toggleClass('showaside backgroundImage');
    $('#toggle').toggleClass('showaside');
    $('#menu').toggleClass('hide');
    $('#header').toggleClass('header hide');
    $('#bio').toggleClass('hide');
    $('body').addClass('backgroundImage');
 }

 adjustWidth () {
   $('#bodyWrapper').addClass('showaside backgroundImage');
 }
}

