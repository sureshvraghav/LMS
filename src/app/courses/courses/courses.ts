import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveClass } from "./live-class/live-class";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, LiveClass, RouterLink],
  templateUrl: './courses.html',
  styleUrls: ['./courses.css']
})
export class Courses {

  activeTab: 'active' | 'completed' | 'similar' = 'active';

  courses = [
    {
      id: 1,
      title: 'CAPM® Certification Training',
      rating: 5,
      hours: 122,
      modules: 6,
      level: 'Beginner',
      trainer: 'Mr Jacob Jones',
      startDate: '01-12-2025',
      endDate: '15-01-2026',
      image: '/course.jpg',
      active: true
    },
    {
      id: 2,
      title: 'CAPM® Certification Training',
      rating: 5,
      hours: 122,
      modules: 6,
      level: 'Beginner',
      trainer: 'Mr Jacob Jones',
      startDate: '01-12-2025',
      endDate: '15-01-2026',
      image: '/course.jpg',
      active: false
    }
  ];
completedCourses = [
  {
    title: 'CAPM® Certification Training',
    image: '/course.jpg',
    hours: 122,
    modules: 6,
    level: 'Beginner',
    startDate: '01-12-2025',
    endDate: '15-01-2026'
  },
  {
    title: 'CAPM® Certification Training',
    image: '/course.jpg',
    hours: 122,
    modules: 6,
    level: 'Beginner',
    startDate: '01-12-2025',
    endDate: '15-01-2026'
  },
  {
    title: 'CAPM® Certification Training',
    image: '/course.jpg',
    hours: 122,
    modules: 6,
    level: 'Beginner',
    startDate: '01-12-2025',
    endDate: '15-01-2026'
  }
];
 upcomingSessions = [
  {
    day: '28',
    month: 'Dec',
    title: 'CAPM® - Arabic Course - Module 1',
    date: '28-12-2025',
    time: '10:00 am',
    duration: '2:30 hrs'
  },
  {
    day: '29',
    month: 'Dec',
    title: 'CAPM® - Arabic Course - Module 2',
    date: '29-12-2025',
    time: '10:00 am',
    duration: '2:30 hrs'
  },
  {
    day: '29',
    month: 'Dec',
    title: 'CAPM® - Arabic Course - Module 2',
    date: '29-12-2025',
    time: '10:00 am',
    duration: '2:30 hrs'
  }
];

upcomingQuiz = [
  {
    day: '29',
    month: 'Dec',
    title: 'CAPM® - Arabic Course - Module 1',
    date: '29-12-2025',
    time: '10:00 am',
    duration: '1:00 hr'
  },
    {
    day: '29',
    month: 'Dec',
    title: 'CAPM® - Arabic Course - Module 1',
    date: '29-12-2025',
    time: '10:00 am',
    duration: '1:00 hr'
  },  {
    day: '29',
    month: 'Dec',
    title: 'CAPM® - Arabic Course - Module 1',
    date: '29-12-2025',
    time: '10:00 am',
    duration: '1:00 hr'
  }
];
// 3rd Section – Overall Module Report
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
// SIMILAR COURSES
similarCourses = [
  {
    title: 'CAPM® Certification Training',
    author: 'Ronald Richards',
    rating: 5,
    ratingsCount: 1200,
    hours: 22,
    lectures: 155,
    level: 'Beginner',
    description:
      'The CAPM® certification, accredited by PMI, is a foundational project management course ideal for beginners. It covers core project management concepts, tools, and best practices to enhance your skills.',
    image: '/course-similar.png'
  },
  {
    title: 'CAPM® Certification Training',
    author: 'Ronald Richards',
    rating: 5,
    ratingsCount: 1200,
    hours: 22,
    lectures: 155,
    level: 'Beginner',
    description:
      'The CAPM® certification, accredited by PMI, is a foundational project management course ideal for beginners. It covers core project management concepts, tools, and best practices to enhance your skills.',
    image: '/course-similar.png'
  },
  {
    title: 'CAPM® Certification Training',
    author: 'Ronald Richards',
    rating: 5,
    ratingsCount: 1200,
    hours: 22,
    lectures: 155,
    level: 'Beginner',
    description:
      'The CAPM® certification, accredited by PMI, is a foundational project management course ideal for beginners. It covers core project management concepts, tools, and best practices to enhance your skills.',
    image: '/course-similar.png'
  },
  {
    title: 'CAPM® Certification Training',
    author: 'Ronald Richards',
    rating: 5,
    ratingsCount: 1200,
    hours: 22,
    lectures: 155,
    level: 'Beginner',
    description:
      'The CAPM® certification, accredited by PMI, is a foundational project management course ideal for beginners. It covers core project management concepts, tools, and best practices to enhance your skills.',
    image: '/course-similar.png'
  },
  {
    title: 'CAPM® Certification Training',
    author: 'Ronald Richards',
    rating: 5,
    ratingsCount: 1200,
    hours: 22,
    lectures: 155,
    level: 'Beginner',
    description:
      'The CAPM® certification, accredited by PMI, is a foundational project management course ideal for beginners. It covers core project management concepts, tools, and best practices to enhance your skills.',
    image: '/course-similar.png'
  },
  {
    title: 'CAPM® Certification Training',
    author: 'Ronald Richards',
    rating: 5,
    ratingsCount: 1200,
    hours: 22,
    lectures: 155,
    level: 'Beginner',
    description:
      'The CAPM® certification, accredited by PMI, is a foundational project management course ideal for beginners. It covers core project management concepts, tools, and best practices to enhance your skills.',
    image: '/course-similar.png'
  },
  {
    title: 'CAPM® Certification Training',
    author: 'Ronald Richards',
    rating: 5,
    ratingsCount: 1200,
    hours: 22,
    lectures: 155,
    level: 'Beginner',
    description:
      'The CAPM® certification, accredited by PMI, is a foundational project management course ideal for beginners. It covers core project management concepts, tools, and best practices to enhance your skills.',
    image: '/course-similar.png'
  },
  {
    title: 'CAPM® Certification Training',
    author: 'Ronald Richards',
    rating: 5,
    ratingsCount: 1200,
    hours: 22,
    lectures: 155,
    level: 'Beginner',
    description:
      'The CAPM® certification, accredited by PMI, is a foundational project management course ideal for beginners. It covers core project management concepts, tools, and best practices to enhance your skills.',
    image: '/course-similar.png'
  },
  {
    title: 'CAPM® Certification Training',
    author: 'Ronald Richards',
    rating: 5,
    ratingsCount: 1200,
    hours: 22,
    lectures: 155,
    level: 'Beginner',
    description:
      'The CAPM® certification, accredited by PMI, is a foundational project management course ideal for beginners. It covers core project management concepts, tools, and best practices to enhance your skills.',
    image: '/course-similar.png'
  },
  {
    title: 'CAPM® Certification Training',
    author: 'Ronald Richards',
    rating: 5,
    ratingsCount: 1200,
    hours: 22,
    lectures: 155,
    level: 'Beginner',
    description:
      'The CAPM® certification, accredited by PMI, is a foundational project management course ideal for beginners. It covers core project management concepts, tools, and best practices to enhance your skills.',
    image: '/course-similar.png'
  },
  {
    title: 'CAPM® Certification Training',
    author: 'Ronald Richards',
    rating: 5,
    ratingsCount: 1200,
    hours: 22,
    lectures: 155,
    level: 'Beginner',
    description:
      'The CAPM® certification, accredited by PMI, is a foundational project management course ideal for beginners. It covers core project management concepts, tools, and best practices to enhance your skills.',
    image: '/course-similar.png'
  }
];


// 2nd Section
reports = [
    {
      courseName: 'CAPM® Certification Training',
      courseImage: '/course.jpg',
      trainer: 'Leasie Watson',
      trainerAvatar: '/arab-women.png',
      startDate: '26-12-2025',
      endDate: '26-12-2025',
      status: 'In Progress'
    },
    {
      courseName: 'French® Certification Training',
      courseImage: '/course.jpg',
      trainer: 'Leasie Watson',
      trainerAvatar: '/arab-women.png',
      startDate: '26-12-2025',
      endDate: '26-12-2025',
      status: 'In Progress'
    }
  ];


}
