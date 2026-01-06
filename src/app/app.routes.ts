import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Layout } from './layout/layout';
import { Dash } from './dash/dash';
import { Courses } from './courses/courses';
import { Quiz } from './quiz/quiz';
import { QuizPage } from './quiz/quiz-page/quiz-page';
import { Certificate } from './certificate/certificate';
import { Attendance } from './attendance/attendance';
import { Library } from './library/library';

export const routes: Routes = [
   { path: '', redirectTo: 'login', pathMatch: 'full' },
   { path: 'login', component: Login },
   { path: 'signup', component: Signup },
    {
    path: '',
    component: Layout,
    children: [
      { path: 'dashboard', component: Dash },
      { path: 'courses', component: Courses },
      { path: 'quiz', component: Quiz },              
      { path: 'quiz/start', component: QuizPage },
      { path: 'certificate', component: Certificate },  
      { path: 'attendance', component: Attendance },    
      { path: 'library', component: Library },  
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];
