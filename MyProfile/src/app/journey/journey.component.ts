import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.scss']
})
export class JourneyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
     // Toggling background image on moving to About page
     $('body').removeClass('backgroundImage').addClass('backgroundStyle');
  }
}
