import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-certificate',
  imports: [CommonModule],
  templateUrl: './certificate.html',
  styleUrl: './certificate.scss',
})
export class Certificate {

  completedCourses = [
  {
    title: 'CAPM® Certification Training',
    image: '/course.jpg',
    hours: 122,
    modules: 6,
    level: 'Beginner',
    startDate: '01-12-2025',
    endDate: '15-01-2026',
    active:true
  },
  {
    title: 'CAPM® Certification Training',
    image: '/course.jpg',
    hours: 122,
    modules: 6,
    level: 'Beginner',
    startDate: '01-12-2025',
    endDate: '15-01-2026',
    active:false
  },
  {
    title: 'CAPM® Certification Training',
    image: '/course.jpg',
    hours: 122,
    modules: 6,
    level: 'Beginner',
    startDate: '01-12-2025',
    endDate: '15-01-2026',
    active:false
  }
];

moduleReports = [
  {
    moduleName: 'COBIT5 Principles',
    trainer: 'Jacob Jones',
    trainerAvatar: '/arab-women.png',
    startDate: '07-12-2025',
    timeSpent: '02:02:12',
    quizScore: 60,
    status: 'Completed'
  },
  {
    moduleName: 'COBIT 5 Enablers',
    trainer: 'Jacob Jones',
    trainerAvatar: '/arab-women.png',
    startDate: '13-12-2025',
    timeSpent: '02:02:12',
    quizScore: 37,
    status: 'Completed'
  },
  {
    moduleName: 'Introduction to COBIT 5 Implementation',
    trainer: 'Jacob Jones',
    trainerAvatar: '/arab-women.png',
    startDate: '26-12-2025',
    timeSpent: '02:02:12',
    quizScore: 95,
    status: 'Completed'
  },
  {
    moduleName: 'Process Capability Assessment Model',
    trainer: 'Jacob Jones',
    trainerAvatar: '/arab-women.png',
    startDate: '02-01-2026',
    timeSpent: '02:02:12',
    quizScore: 95,
    status: 'Completed'
  }
];

}
