import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveClass } from "./live-class/live-class";
import { liveclass } from '../core/services/liveclass/liveclass';
import { Router } from '@angular/router';
import { ApiService } from '../core/services/api.service';
import { AuthService } from '../core/services/auth.service';




interface ApiResponse<T> {
  status: number;
  message: string;
  data: T;
}
export interface Course {
  id: string;
  trainerId: string;
 
  coursename: string; 
  coursecategory: string;
  courselevel: string;
  certificateavalibility: string;
  noofmodule: string;
  rating: string;
  modules: Module[];
  metadata: Metadata[];
}

export interface Module {
  moduleId: string;
  moduleName: string;
  moduleDescription: string;
  moduleDuration: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
}


 interface Metadata {
  fileName: string;
  mimeType: string;
  width: number;
  height: number;
  fileSizeKB: number;
}


@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, LiveClass],
  templateUrl: './courses.html',
  styleUrls: ['./courses.scss']
})
export class Courses implements OnInit{
  course: Course[] = [];
  loading = true;
  error = '';
 ngOnInit(): void {

   this.liveclass();
   
  }
 
   constructor( private liveservice: liveclass,
    private router: Router,
    private api:ApiService,
  private authService: AuthService){}
    
  
  activeTab: 'active' | 'completed' | 'similar' = 'active';
liveclass()
   {
   const userId = this.authService.getUserId();
   console.log(userId)
const role = localStorage.getItem('role')
if (userId && role === 'LEARNER') {
  this.api.get(`purchase/${userId}/getpurchasedcourses`).subscribe({
    next: (res: any) => {
     
      console.log('Courses  >>>', res.data);
      this.course = res.data; 
    },
    error: (err) => console.error(err)
  });
}


  // console.log("User ID:", userId);
  //     //  this.api.get('addnewcourses/getallcourses').subscribe({
  //      this.liveservice.liveclassdata().subscribe({
  //      next:(res:any)=>{
  //       console.log("data>>>>>>>>>>>>>",res.data)
  //      this.course = res.data;
  //       this.loading = false;
  //       this.loading = false;
  //          }
  //          ,
  //        error:(err)=>{
  //       this.error = 'Failed to load courses';
  //       this.loading = false;
  
  //   }


    
  // })

   
 

  
}

  
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
 