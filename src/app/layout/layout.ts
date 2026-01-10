import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { CommonModule } from '@angular/common';


export interface MenuItem {
  label: string;
  route: string;
  iconDefault: string;
  iconActive: string;
} 

@Component({
  selector: 'app-layout',
  standalone:true,
  imports: [RouterModule,CommonModule],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout implements OnInit {
username: string = '';
  
 user = {
    name: 'Abishek',
    greeting: 'Good Morning',
    notifications: 2,
    avatar: '/user.jpg'
  };

   menuItems: MenuItem[] = [
    {
      label: 'Dashboard',
      route: '/dashboard',
      iconDefault: '/b-dash.png',
      iconActive: '/a-dash.png',
    },
    {
      label: 'My Courses',
      route: '/courses',
      iconDefault: '/b-course.png',
      iconActive: '/a-course.png',
    },
    {
      label: 'My Library',
      route: '/library',
      iconDefault: '/b-lib.png',
      iconActive: '/a-lib.png',
    },
    {
      label: 'My Quiz',
      route: '/quiz',
      iconDefault: '/b-quiz.png',
      iconActive: '/a-quiz.png',
    },
    {
      label: 'My Attendance',
      route: '/attendance',
      iconDefault: '/b-atten.png',
      iconActive: '/a-atten.png',
    },
    {
      label: 'My Certificate',
      route: '/certificate',
      iconDefault: '/b-cert.png',
      iconActive: '/a-cert.png',
    },
    {
      label: 'Settings',
      route: '/settings',
      iconDefault: '/b-settings.png',
      iconActive: '/a-settings.png',
    },
    {
      label: 'Dashboard-T',
      route: '/dashboard-t',
      iconDefault: '/b-dash.png',
      iconActive: '/a-dash.png',
    },
    {
      label: 'Course Completion',
      route: '/course-completion',
      iconDefault: '/b-course.png',
      iconActive: '/a-course.png',
    },
    {
      label: 'Document Upload',
      route: '/document-upload',
      iconDefault: '/b-lib.png',
      iconActive: '/a-lib.png',
    },
    {
      label: 'Quiz Management',
      route: '/quiz-management',
      iconDefault: '/b-quiz.png',
      iconActive: '/a-quiz.png',
    },
    {
      label: 'Students Management',
      route: '/student-management',
      iconDefault: '/b-quiz.png',
      iconActive: '/a-quiz.png',
    },
  ];

    get filteredNavigation() {
    const role = this.getUserRole();
    console.log(role)
    if (role === 'INSTRUCTOR') {
      console.log("INSTRUCTOR")
      return this. menuItems.filter(item => item.label !== 'Dashboard'&&
        item.label!=='My Courses'
        &&item.label!=='My Library'&&item.label!=='My Quiz'
        &&item.label!=='My Certificate'&&item.label!=='Settings'
      );
        
    }

    else if (role==='LEARNER') {
      console.log("learner working")
      return this. menuItems.filter(item => item.label !== 'Dashboard-T'&&
        item.label!=='Course Completion'
        &&item.label!=='Quiz Management'&&item.label!=='Document Upload'
        &&item.label!=='Students Management'&&item.label!=='Settings'
      );
    }
    return this. menuItems;
  }
  constructor(
    private authService:AuthService,
    private API: HttpClient,
    private router:Router
  ) {}
  ngOnInit(): void {
        const token = localStorage.getItem('authToken');
        console.log("token"+token)
        const username=localStorage.getItem('currentUser');
        console.log(username)
  }
 
   getUserRole(): string {
    return this.authService.getrole() || 'USER';
  }
    getUserName():string {
    return localStorage.getItem('currentUser') || 'User';
  }
   getUserEmail(): string {
    return localStorage.getItem('useremail') || '';
  }

  

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  
}
