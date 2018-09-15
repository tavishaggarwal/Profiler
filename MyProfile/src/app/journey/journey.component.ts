import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.scss']
})
export class JourneyComponent implements OnInit {

  profesionalAchievements = [
    {title: 'GGK Tech', description: 'Software Engineer: Aug 2017 - Prsent', position: 'left fadeInLeft',
    imageSrc: '/assets/ggk.png'},

    {title: 'MAQ Software', description: 'Software Engineer: Jun 2016 – Jul 2017', position: 'right fadeInRight',
    imageSrc: '/assets/maq.png'},

    {title: 'MAQ Software', description: 'Software Intern: Feb 2016 – May 2016', position: 'right fadeInRight',
    imageSrc: '/assets/maq.png'},

    {title: 'Tridz', description: 'Internship: Dec 2014 - Jan 2015', position: 'left fadeInLeft',
    imageSrc: '/assets/tridz.png'},
  ];

  educationAchievements = [
    {title: 'SRM University, Chennai', description: 'Bachelor\'s Degree, Software Engineering, 9.5 : 2012 - 2016',
    position: 'left fadeInLeft', imageSrc: '/assets/srm.png'},

    {title: 'Dav Sr sec School, Chandigarh', description: 'Intermidiate: 2011 – 2012',
    position: 'right fadeInRight', imageSrc: '/assets/dav.gif'},

    {title: 'KC Public School, Jammu', description: '10th: 2009 - 2010', position: 'left fadeInLeft',
    imageSrc: '/assets/kc_public.png'},
  ];

  constructor() { }

  ngOnInit() {
     // Toggling background image on moving to About page
     $('body').removeClass('backgroundImage').addClass('backgroundStyle');
  }
}
