import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CreateBatch } from './create-batch/create-batch';
import { ActivateBatch } from './activate-batch/activate-batch';
import { Edit } from './edit/edit';
import { liveclass } from '../../core/services/liveclass/liveclass';


export interface DashboardCard {
  title: string;
  value: string | number;
  image: string;
  badgeText?: string;
  badgeType?: 'info' | 'success' | 'danger';
}

@Component({
  selector: 'app-batch-management',
  standalone: true,
  imports: [CommonModule, CreateBatch, ActivateBatch, Edit],
  templateUrl: './batch-management.html',
  styleUrl: './batch-management.css',
})
export class BatchManagement {
   constructor(private getllcourses:liveclass){}
 
  
  // ---------- VIEW STATE ----------
  view: 'list' | 'create' | 'activate' | 'edit' = 'list';
  selectedCourse: any = null;

  // ---------- CARDS ----------
  cards: DashboardCard[] = [
    { title: 'Total Batches', value: 90, image: 'a-course.png' },
    { title: 'Total Active Batches', value: 22, image: 'a-course.png' },
    { title: 'Total Active Online Batches', value: 47, image: 'a-atten.png' },
    { title: 'Total Active Offline Batches', value: 18, image: 'a-atten.png' },
  ];

  // ---------- COURSES ----------
  courses = [
    {
      courseName: 'CAPM® - Arabic Course - Beginner',
      courseId: '112233',
      batchNo: 2,
      mode: 'Online',
      startDate: '12-01-2026',
      strength: 8,
      status: 'activate',
    },
    {
      courseName: 'CAPM® - Arabic Course - Beginner',
      courseId: '112233',
      batchNo: 2,
      mode: 'Online',
      startDate: '04-01-2026',
      strength: 20,
      status: 'active',
    },
       {
      courseName: 'CAPM® - Arabic Course - Beginner',
      courseId: '112233',
      batchNo: 2,
      mode: 'Online',
      startDate: '04-01-2026',
      strength: 20,
      status: 'active',
    },
       {
      courseName: 'CAPM® - Arabic Course - Beginner',
      courseId: '112233',
      batchNo: 2,
      mode: 'Online',
      startDate: '04-01-2026',
      strength: 20,
      status: 'active',
    },
  ];


  

  // ---------- NAVIGATION ----------
  openCreate() {
    this.view = 'create';
  }
goBack() {
    history.back();
  }
  openActivate(course: any) {
    this.selectedCourse = course;
    this.view = 'activate';
  }

  openEdit(course: any) {
    this.selectedCourse = course;
    this.view = 'edit';
  }

  backToList() {
    this.view = 'list';
    this.selectedCourse = null;
  }
}
