import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-attendance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './attendance.html',
  styleUrls: ['./attendance.scss']
})
export class Attendance {

  stats = [
  {
    title: 'Average In Time',
    value: '11:11:23',
    change: '+3% from November',
    positive: true,
    icon: 'fa-solid fa-right-to-bracket'
  },
  {
    title: 'Average Out Time',
    value: '13:24:12',
    change: '+1% from November',
    positive: true,
    icon: 'fa-solid fa-right-from-bracket'
  },
  {
    title: 'Average Present Time',
    value: '01:32:56',
    change: '-2% from November',
    positive: false,
    icon: 'fa-solid fa-clock'
  },
  {
    title: 'Total Absent Days',
    value: '3 Days',
    change: '',
    positive: true,
    icon: 'fa-solid fa-user-xmark'
  }
];

  calendarDays = Array.from({ length: 30 }, (_, i) => i + 1);

  attendanceLogs = [
    { date: '01-12-2025', in: '11:12:02', out: '12:40:02', total: '1 Hr 32 Mins' },
    { date: '02-12-2025', in: '11:12:02', out: '12:40:02', total: '1 Hr 32 Mins' },
    { date: '03-12-2025', in: '11:12:02', out: '12:40:02', total: '1 Hr 32 Mins' },
    { date: '04-12-2025', in: '11:12:02', out: '12:40:02', total: '1 Hr 32 Mins' },
    { date: '05-12-2025', in: '11:12:02', out: '12:40:02', total: '1 Hr 32 Mins' },
    { date: '06-12-2025', in: '11:12:02', out: '12:40:02', total: '1 Hr 32 Mins' },
    { date: '07-12-2025', in: '11:12:02', out: '12:40:02', total: '1 Hr 32 Mins' },
    { date: '08-12-2025', in: '11:12:02', out: '12:40:02', total: '1 Hr 32 Mins' },
    { date: '09-12-2025', in: '11:12:02', out: '12:40:02', total: '1 Hr 32 Mins' },
    { date: '10-12-2025', in: '11:12:02', out: '12:40:02', total: '1 Hr 32 Mins' }
  ];

}
