import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { liveclass } from '../../core/services/liveclass/liveclass';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-live-class',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './live-class.html',
  styleUrl: './live-class.scss',
})
export class LiveClass 
 {

   
 
    constructor(
    private liveservice: liveclass,
    private router: Router,
    private api:ApiService
  ) {}

   
  liveClasses = [
    {
      title: 'CAPM® - Arabic Course - Module 1',
      image: '/course.jpg',
      date: '26-12-2025',
      time: '10:00 am',
      duration: '2:30 hrs',
      assignments: true,
      live: true
    },
    {
      title: 'CAPM® - Arabic Course - Module 2',
      image: '/course.jpg',
      date: '26-12-2025',
      time: '04:30 pm',
      duration: '3:00 hrs',
      countdown: '05:32:23'
    },
    {
      title: 'CAPM® - Arabic Course - Module 2',
      image: '/course.jpg',
      date: '26-12-2025',
      time: '04:30 pm',
      duration: '3:00 hrs',
      countdown: '05:32:23'
    },
     {
      title: 'CAPM® - Arabic Course - Module 2',
      image: '/course.jpg',
      date: '26-12-2025',
      time: '04:30 pm',
      duration: '3:00 hrs',
      countdown: '05:32:23'
    },
     {
      title: 'CAPM® - Arabic Course - Module 2',
      image: '/course.jpg',
      date: '26-12-2025',
      time: '04:30 pm',
      duration: '3:00 hrs',
      countdown: '05:32:23'
    }
  ];

  schedule = [
    { time: '09:30 AM', text: 'CAPM® - Arabic Course – Module 1.1' },
    { time: '12:30 PM', text: 'Lunch Break' },
    { time: '01:30 PM', text: 'CAPM® - Arabic Course – Module 1.2' },
    { time: '04:30 PM', text: 'Tea Break' }
  ];

}
