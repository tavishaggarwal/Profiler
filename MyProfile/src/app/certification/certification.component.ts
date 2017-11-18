import { Component, AfterViewInit } from '@angular/core';
import * as globalsFunc from './../functions';

@Component({
  selector: 'profile-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.scss']
})
export class CertificationComponent implements AfterViewInit {
edx = [
  {name: 'Querying with Transact SQL', owner: 'Microsoft'},
  {name: 'Introduction to Computer Science', owner: 'Harvard'},
  {name: 'Programming with C#', owner: 'Microsoft'},
  {name: 'Analyzing and Visualizing Data with Excel', owner: 'Microsoft'},
];

coursera = [
{name: 'Full Stack Web Development Specialization',
topics: 'HTML, CSS, Bootstrap 3, MongoDB, Express, AngularJS, NodeJS'},
{name: 'Data Warehouse by University of Colorado'}
];

pluralsight = [
  {name: 'Introduction to VUE JS'},
  {name: 'Asynchronous Programming with JavaScript (RxJS)'},
  {name: 'Introduction to Angular'},
  {name: 'Advance JavaScript (ES6)'},
  {name: 'Introduction to Ember 2'},
  {name: 'Introduction to TypeScript'},
  {name: 'Introduction to Laravel'},
  {name: 'Object Oriented PHP'}
];

  constructor() { }

  ngAfterViewInit() {
    const functions = new globalsFunc.Functions();

     // Toggling background image on moving to About page
     $('body').removeClass('backgroundImage').addClass('backgroundStyle');

     $(window).scroll(function (event) {

      if (functions.IsInViewport(document.getElementById('pluralsight'))) {
        $('#pluralsight').addClass('fadeInLeft');
      }

      if (functions.IsInViewport(document.getElementById('edx'))) {
        $('#edx').addClass('fadeInLeft');
      }

      if (functions.IsInViewport(document.getElementById('coursera'))) {
        $('#coursera').addClass('fadeInLeft');
      }
    });
  }
}
