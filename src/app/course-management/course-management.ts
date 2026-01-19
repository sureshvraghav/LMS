import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AddModules } from './add-modules/add-modules';
import { ApiService } from '../core/services/api.service';
import { CourseService } from './course-service';
import { AuthService } from '../core/services/auth.service';

export interface DashboardCard {
  title: string;
  value: string | number;
  image: string;
  badgeText?: string;
  badgeType?: 'info' | 'success' | 'danger';
}
interface Module {
    moduleId: string;
    moduleName: string;
    moduleDescription: string;
    moduleDuration: string;
    startDate: string;
    endDate: string;
    startTime: string;
    endTime: string;
  }

  interface Course {
    
    adminId: string|null;
    adminname:string;
    courseid: string;
    coursename: string;
    rating: number;
    coursedesc: string;
    coursecategory: string;
    courseduration: string;
    trainingmode: string;
    courselevel: string;
    language: string;
    certificateavalibility: string;
    noofmodule: string;
    modules: Module[];
     moduleCount: number;
  }
 interface Metadata {
  fileName: string;
  mimeType: string;
  width: number;
  height: number;
  fileSizeKB: number;
}


@Component({
  selector: 'app-course-management',
  imports: [CommonModule,FormsModule,RouterLink,AddModules],
  templateUrl: './course-management.html',
  styleUrl: './course-management.scss',
})
export class CourseManagement implements OnInit {
   cards: DashboardCard[] = [
    {
      title: 'Total Courses',
      value: 30,
      image: 'a-course.png',
      badgeText: '2 Newly Added',
      badgeType: 'info',
    },
    {
      title: 'Total Published Courses',
      value: 22,
      image: 'a-course.png',
      badgeText: '↑ 7% from December',
      badgeType: 'success',
    },
    {
      title: 'Total Sessions Completed',
      value: 147,
      image: 'a-atten.png',
    },
    {
      title: 'Avg Course Completion Rate',
      value: '87%',
     image: 'a-atten.png',
      badgeText: '↓ 3% from December',
      badgeType: 'danger',
    },
  ];
  courses: Course[] = [];
course: Course = {
    adminId: this.getUserId(),
    courseid: '',
    adminname:this.getUserName(),
    coursename: '',
    rating: 5,
    coursedesc: '',
    coursecategory: '',
    courseduration: '',
    trainingmode: '',
    courselevel: '',
    language: '',
    certificateavalibility: '',
    noofmodule: '0',
    moduleCount: 0,
    modules: []
  };

  constructor(private courseService: CourseService,private authService:AuthService,) {}
  ngOnInit(): void {
    
  console.log(this.getUserId())

   console.log(this.getUserName())
  }

    showCreateForm = false;
    showAddModules = false;


  openCreateForm() {
    this.showCreateForm = true;
     this.showAddModules = false;
  }
showModules = false;

  closeCreateForm() {
    this.showCreateForm = false;
  }
  showModulesSection = false;

onCourseFormChange() {
  this.showModulesSection = true;
}


 
  goBack() {
    history.back();
  }
  getUserId(): string | null {
   return localStorage.getItem('userId');
 
} 


   getUserName():string {
    return localStorage.getItem('currentUser') || 'User';
  }
submitCourse() {
  const formData = new FormData();

 
  // formData.append('course', JSON.stringify(this.course));
  console.log('this.imageFile-----> to be sent:'+this.imageFile);
   console.log('this.imageFile----->111111:'+this.imageFile?.name);
 
  if (this.imageFile) {
    formData.append('file', this.imageFile, this.imageFile.name);
  }

  // formData.forEach((value, key) => console.log(key, value));

  // formData.append('file', this.courseFile, this.courseFile.name );
 
  formData.append(
    'course',
    new Blob([JSON.stringify(this.course)], { type: 'application/json' })
  );

    console.log('this.imageFile-----> to be sent: after'+this.imageFile);
   console.log('this.imageFile----->111111:'+this.imageFile?.name);
 
  this.courseService.AddCourse(formData).subscribe({
    next: res => {
      console.log('Backend response:', res);
      alert('Course Created Successfully');
    },
    error: err => {
      console.error('API Error Details:', err);
      alert('Failed to create course. Check backend logs.');
    }
  });
}


  trainerPhotoFile: File | null = null;
  courseFile: File | null = null;
imageFile:any;
onCourseFileSelect(event: any) {
  const courseFile = event.target.files[0];
  this.imageFile = courseFile;
  // console.log('Selected course file:3333333333', this.courseFile?.name);
  console.log('Selected course', courseFile.name);

  const reader = new FileReader();
    reader.onload = () => {
      this.photoPreview = reader.result as string;
    };
    reader.readAsDataURL(courseFile);
}

  resetForm() {
    this.course = {
      adminId: '',
      adminname:'',
      courseid: '',
      coursename: '',
      rating: 0,
      coursedesc: '',
      coursecategory: '',
      courseduration: '',
      trainingmode: '',
      courselevel: '',
      language: '',
      certificateavalibility: 'Yes',
      noofmodule: '0',
      moduleCount: 0,
      modules: []
    };
    this.photoPreview = null;
    this.showAddModules = false;
    this.showCreateForm = false;
  }

  // private dataURLtoBlob(dataurl: string) {
  //   const arr = dataurl.split(',');
  //   const mime = arr[0].match(/:(.*?);/)![1];
  //   const bstr = atob(arr[1]);
  //   let n = bstr.length;
  //   const u8arr = new Uint8Array(n);
  //   while (n--) u8arr[n] = bstr.charCodeAt(n);
  //   return new Blob([u8arr], { type: mime });
  // }
 photoPreview: string | null = null;
onPhotoSelected(event: any) {
    const file = event.target.files[0];
    if (!file) return;
 
    const reader = new FileReader();
    reader.onload = () => {
      this.photoPreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
 
openAddModules() {
  if (!this.course.moduleCount || this.course.moduleCount <= 0) {
    alert('Please select number of modules');
    return;
  }
  this.showAddModules = true;
}


onModulesAdded(modules: Module[]) {
 
  this.course.modules = modules.map(m => ({
    ...m,
    moduleDescription: m.moduleDescription?.toString() || ''
  }));

  this.course.noofmodule = modules.length.toString();
  this.showAddModules = false;

  console.log('Final Course Payload', this.course);
  this.submitCourse();
}




}
