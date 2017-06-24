import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';

@Component({
  selector: 'profile-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

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
    $('body').removeClass('backgroundImage').addClass('backgroundStyle');
}

  ngOnInit() {
    $(window).scroll(function (event) {
      const scroll = $(window).scrollTop();
      $('#skillsImage').addClass('fadeInRight'
      );
    });
  }

}
