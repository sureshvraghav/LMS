import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import { BatchesTimeline } from "./batches-timeline/batches-timeline";



@Component({
  selector: 'app-dashboard-t',
  standalone: true,
  imports: [
    CommonModule,
    FullCalendarModule,
    BatchesTimeline
],
  templateUrl: './dashboard-t.html',
  styleUrl: './dashboard-t.css',
})


export class DashboardT {

  /* STATS */
  stats = [
    { title: 'Total Batches', value: 3, progress: 100 },
    { title: 'Active Batches', value: 3, progress: 100 },
    { title: 'Completed Batches', value: 12, progress: 75 },
    { title: 'Total Modules Completed', value: 34, progress: 80 }
  ];

  /* LIVE CLASSES */
  liveClasses = [
    {
      title: 'CAPM® - Arabic Course - Module 1.1',
      date: '02-01-2026',
      time: '09:30 am',
      duration: '3 hrs',
      students: 12,
      status: 'live'
    },
    {
      title: 'CAPM® - Arabic Course - Module 1.2',
      date: '02-01-2026',
      time: '01:30 pm',
      duration: '3 hrs',
      students: 12,
      status: 'upcoming',
      countdown: '05:32:23'
    }
  ];

  /* CALENDAR */
  calendarOptions = {
  plugins: [dayGridPlugin],
  initialView: 'dayGridMonth',

  height: 320,              // 👈 reduce overall height
  aspectRatio: 1.3,         // 👈 makes it more compact
  headerToolbar: {
    left: 'prev',
    center: 'title',
    right: 'next'
  },

  dayMaxEventRows: 2,       

  events: [
    {
      title: 'Live Class – CAPM Module 1.1',
      date: '2026-01-02',
      color: '#0b3a82'
    },
    {
      title: 'Quiz',
      date: '2026-01-05',
      color: '#f59e0b'
    }
  ]
};

}
