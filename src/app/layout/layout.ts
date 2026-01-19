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
    roles: string[];
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
        roles: ['LEARNER']

    },
    {
      label: 'My Courses',
      route: '/courses',
      iconDefault: '/b-course.png',
      iconActive: '/a-course.png',
        roles: ['LEARNER']
    },
    {
      label: 'My Library',
      route: '/library',
      iconDefault: '/b-lib.png',
      iconActive: '/a-lib.png',
        roles: ['LEARNER']
    },
    {
      label: 'My Quiz',
      route: '/quiz',
      iconDefault: '/b-quiz.png',
      iconActive: '/a-quiz.png',
        roles: ['LEARNER']
    },
   {
      label: 'My Attendance',
      route: '/attendance',
      iconDefault: '/b-atten.png',
      iconActive: '/a-atten.png',
        roles: ['LEARNER']
    },
    {
      label: 'My Certificate',
      route: '/certificate',
      iconDefault: '/b-cert.png',
      iconActive: '/a-cert.png',
        roles: ['LEARNER']
    },
    // {
    //   label: 'Settings',
    //   route: '/settings',
    //   iconDefault: '/b-settings.png',
    //   iconActive: '/a-settings.png',
    //     roles: ['LEARNER']
    // },
    {
      label: 'Dashboard',
      route: '/dashboard-t',
      iconDefault: '/b-dash.png',
      iconActive: '/a-dash.png',
        roles: ['INSTRUCTOR']
    },
    {
      label: 'Course Completion',
      route: '/course-completion',
      iconDefault: '/b-course.png',
      iconActive: '/a-course.png',
        roles: ['INSTRUCTOR']
    },
    {
      label: 'Document Upload',
      route: '/document-upload',
      iconDefault: '/b-lib.png',
      iconActive: '/a-lib.png',
       roles: ['INSTRUCTOR']
    },
    {
      label: 'Quiz Management',
      route: '/quiz-management',
      iconDefault: '/b-quiz.png',
      iconActive: '/a-quiz.png',
       roles: ['INSTRUCTOR']
    },
    {
      label: 'Students Management',
      route: '/student-management',
      iconDefault: '/b-quiz.png',
      iconActive: '/a-quiz.png',
       roles: ['INSTRUCTOR']
    },
        {
      label: 'Batch Management',
      route: '/batch-management',
      iconDefault: '/b-quiz.png',
      iconActive: '/a-quiz.png',
       roles: ['ADMIN']
    },
     {
      label: 'Course management',
      route: '/Course-management',
      iconDefault: '/b-dash.png',
      iconActive: '/a-dash.png',
        roles: ['ADMIN']
    },
     {
      label: 'Trainer management',
      route: '/trainer-management',
      iconDefault: '/b-dash.png',
      iconActive: '/a-dash.png',
        roles: ['ADMIN']
    },
     
  ];

  //   get filteredNavigation() {
  //   const role = this.getUserRole();
  //   console.log(role)
  //   if (role === 'INSTRUCTOR') {
  //     console.log("INSTRUCTOR")
  //     return this. menuItems.filter(item => item.label !== 'Dashboard'&&
  //       item.label!=='My Courses'&&item.label!='My Attendance'
  //       &&item.label!=='My Library'&&item.label!=='My Quiz'
  //       &&item.label!=='My Certificate'&&item.label!=='Settings'
  //     );
        
  //   }

  //   else if (role==='LEARNER') {
  //     console.log("learner working")
  //     return this. menuItems.filter(item => item.label !== 'Dashboard-T'&&
  //       item.label!=='Course Completion'
  //       &&item.label!=='Quiz Management'&&item.label!=='Document Upload'
  //       &&item.label!=='Students Management'&&item.label!=='Settings'
  //       &&item.label!=='Batch Management'
  //     );
  //   }
  //   return this. menuItems;
  // }

  get filteredNavigation(): MenuItem[] {
  const role = this.getUserRole();
  return this.menuItems.filter(item =>
    item.roles.includes(role)
  );
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
