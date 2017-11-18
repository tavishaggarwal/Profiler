import { Component, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import * as globalsFunc from './../functions';

@Component({
  moduleId: module.id,
  templateUrl: 'about-us.component.html',
  styleUrls: ['about-us.component.scss']
})
export class AboutUsComponent implements AfterViewInit {

    skills = [
        {img: './assets/HTML_Logo.png', name: 'HTML'},
        {img: './assets/css-ico.png', name: 'CSS (Bootstrap, SASS)'},
        {img: './assets/js-ico.png', name: 'JS (Node JS, ES6, Angular & JQuery)'},
        {img: './assets/typescript-logo.png', name: 'TypeScript'},
        {img: './assets/gulp-ico.png', name: 'Task Runner (Gulp, Grunt)'},
        {img: './assets/rest.png', name: 'REST (AJAX, JSON)'},
        {img: './assets/ionic-ico.png', name: 'Mobile App Development: Ionic'},
        {img: './assets/database-ico.png', name: 'SSMS'},
        {img: './assets/mongodb-ico.png', name: 'Mongo DB'},
        {img: './assets/aws-ico.png', name: 'Amazon Web Services'},
        {img: './assets/security-ico.png', name: 'Network Security'},
        {img: './assets/c++-ico.png', name: 'C++'},
        {img: './assets/java-ico.png', name: 'JAVA'}
    ];

  constructor() {
}

  ngAfterViewInit() {
    const functions = new globalsFunc.Functions();
     // Toggling background image on moving to About page
     $('body').removeClass('backgroundImage').addClass('backgroundStyle');

     $(window).scroll(function (event) {
            if (functions.IsInViewport(document.getElementById('profile'))) {
              $('#profile').addClass('fadeInLeft');
            }

            if (functions.IsInViewport(document.getElementById('worldInsight'))) {
              $('#worldInsight').addClass('fadeInLeft');
            }

            if (functions.IsInViewport(document.getElementById('skillsImage'))) {
              $('#skillsImage').addClass('fadeInLeft');
            }
          });
  }
}
