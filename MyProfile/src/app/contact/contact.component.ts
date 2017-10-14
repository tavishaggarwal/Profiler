import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Toggling background image on moving to About page
     $('body').removeClass('backgroundImage').addClass('backgroundStyle');
  }

}
