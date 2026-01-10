import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Layout } from './layout/layout';
import { Dash } from './dash/dash';
import { Quiz } from './quiz/quiz';
import { QuizPage } from './quiz/quiz-page/quiz-page';
import { Certificate } from './certificate/certificate';
import { Attendance } from './attendance/attendance';
import { Library } from './library/library';
import { CourseCompletion } from './course-completion/course-completion';
import { DocumentUpload } from './document-upload/document-upload';
import { StudentManagement } from './student-management/student-management';
import { ForgotPassword } from './login/forgot-password/forgot-password/forgot-password';
import { NewPassword } from './login/forgot-password/forgot-password/new-password/new-password';
import { QuizManagement } from './quiz-management/quiz-management/quiz-management';
import { CreateQuiz } from './quiz-management/quiz-management/create-quiz/create-quiz';
import { DashboardT } from './dashboard-t/dashboard-t/dashboard-t';
import { CoursePage } from './course-page/course-page/course-page';
import { Courses } from './courses/courses/courses';

export const routes: Routes = [
   { path: '', redirectTo: 'login', pathMatch: 'full' },
   { path: 'login', component: Login },
   { path: 'forgot-password', component: ForgotPassword },
   { path: 'new-password', component: NewPassword },
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
      // trainer module
      { path: 'course-completion', component: CourseCompletion },  
      { path: 'document-upload', component: DocumentUpload }, 
      { path: 'student-management', component: StudentManagement },
        { path: 'quiz-management', component: QuizManagement },
      { path: 'create-quiz', component: CreateQuiz },
      { path: 'dashboard-t', component: DashboardT },
      { path: 'course-page', component: CoursePage },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];
