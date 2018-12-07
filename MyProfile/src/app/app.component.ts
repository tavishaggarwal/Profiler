import { Component, Input, AfterViewInit, OnInit } from '@angular/core';
import * as jQuery from 'jquery';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'profile-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, AfterViewInit {

  constructor(private _swUpdate: SwUpdate) {

  }

  ngOnInit(){
    if (this._swUpdate.isEnabled) {
      this._swUpdate.available.subscribe(() => {
          if(confirm("New version of application is available. Do you want to load new Version?")) {
              window.location.reload();
          }
      });
    } 
  }

  ngAfterViewInit() {
    this.toggleRefresh();
    this.closeNavbar();
  }

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
        $('#menu').toggleClass('hide');
     }
   }
 }

 closeNavbar () {
  $(function() {
      const navMain = $('.navbar-collapse');

      navMain.on('click', 'a:not([data-toggle])', null, function () {
          (<any>navMain).collapse('hide');
      });

      $('body').on('click', function () {
        (<any>navMain).collapse('hide');
      });
  });
}
 adjustWidth () {
   $('#bodyWrapper').addClass('showaside backgroundImage');
 }
}

