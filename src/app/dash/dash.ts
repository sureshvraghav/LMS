import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { MyCourses } from "./my-courses/my-courses";

@Component({
  selector: 'app-dash',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, MyCourses],
  templateUrl: './dash.html',
  styleUrls: ['./dash.scss']
})
export class Dash implements OnInit, OnDestroy {

  sidebarMenu = [
    { label: 'Dashboard', icon: 'layout-dashboard', active: true },
    { label: 'My Courses', icon: 'graduation-cap', active: false },
    { label: 'My Library', icon: 'book-open', active: false },
    { label: 'My Quiz', icon: 'help-circle', active: false },
    { label: 'My Attendance', icon: 'calendar-check', active: false },
    { label: 'My Certificate', icon: 'award', active: false },
    { label: 'Settings', icon: 'settings', active: false }
  ];

  stats = {
    activeCourses: 1,
    upcomingSessions: 3,
    progress: 68,
    completedCourses: 3
  };

  liveSessionTimer = '';
  private timerId!: number;

  ngOnInit() {
    this.timerId = window.setInterval(() => {
      this.liveSessionTimer = new Date().toLocaleTimeString();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.timerId);
  }

  setActive(item: any) {
    this.sidebarMenu.forEach(i => i.active = false);
    item.active = true;
  }
}
