import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';

@Component({
  selector: 'profile-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor() {
    $('body').removeClass('backgroundImage').addClass('backgroundStyle');
}

  ngOnInit() {
  }

}
