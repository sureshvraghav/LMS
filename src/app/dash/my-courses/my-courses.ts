import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-courses',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './my-courses.html',
  styleUrls: ['./my-courses.scss']
})
export class MyCourses {

  activeTab: 'all' | 'ongoing' | 'completed' = 'all';

  courses = [
    {
      title: 'CAPM® - Arabic Course - Module 1',
      image: '/course.jpg',
      progress: 68
    },
    {
      title: 'CAPM® - Arabic Course - Module 1',
      image: '/course.jpg',
      progress: 100
    },
    {
      title: 'CAPM® - Arabic Course - Module 1',
      image: '/course.jpg',
      progress: 100
    }
  ];

  filteredCourses() {
    if (this.activeTab === 'ongoing') {
      return this.courses.filter(c => c.progress < 100);
    }
    if (this.activeTab === 'completed') {
      return this.courses.filter(c => c.progress === 100);
    }
    return this.courses;
  }

  actionLabel(progress: number) {
    return progress === 100 ? 'View Certificate' : 'View Course';
  }
  activeTab1: 'daily' | 'weekly' | 'monthly' = 'daily';

  hours = [
    { label: '9am', total: 60, spent: 28 },
    { label: '10am', total: 60, spent: 30 },
    { label: '11am', total: 60, spent: 32 },
    { label: '12pm', total: 60, spent: 29 },
    { label: '1pm', total: 60, spent: 31 },
    { label: '2pm', total: 60, spent: 34 },
    { label: '3pm', total: 60, spent: 33 },
    { label: '4pm', total: 60, spent: 35 },
    { label: '5pm', total: 60, spent: 30 },
    { label: '6pm', total: 60, spent: 28 },
    { label: '7pm', total: 60, spent: 29 },
    { label: '8pm', total: 60, spent: 27 }
  ];

  setTab(tab: 'daily' | 'weekly' | 'monthly') {
    this.activeTab1 = tab;
  }

  barHeight(value: number): string {
    return `${(value / 60) * 100}%`;
  }

  weekDays = ['Su','Mo','Tu','We','Th','Fr','Sa'];

  // ADMIN-CONTROLLED 
  calendarDates = [
    { date: 1, type: 'none' },
    { date: 2, type: 'none' },
    { date: 3, type: 'none' },
    { date: 4, type: 'none' },
    { date: 5, type: 'none' },
    { date: 6, type: 'none' },
    { date: 7, type: 'none' },

    { date: 8, type: 'none' },
    { date: 9, type: 'none' },
    { date: 10, type: 'none' },
    { date: 11, type: 'none' },
    { date: 12, type: 'none' },
    { date: 13, type: 'none' },
    { date: 14, type: 'quiz' },

    { date: 15, type: 'quiz' },
    { date: 16, type: 'none' },
    { date: 17, type: 'none' },
    { date: 18, type: 'none' },
    { date: 19, type: 'live' },
    { date: 20, type: 'none' },
    { date: 21, type: 'none' },

    { date: 22, type: 'none' },
    { date: 23, type: 'none' },
    { date: 24, type: 'none' },
    { date: 25, type: 'none' },
    { date: 26, type: 'live' },
    { date: 27, type: 'none' },
    { date: 28, type: 'live' },

    { date: 29, type: 'quiz' },
    { date: 30, type: 'assessment' }
  ];

}
