import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Student {
  name: string;
  studentId: string;
  email: string;
  batch: string;
  enrollmentDate: string;
  attendance: number;
  status: 'Active' | 'Inactive';
}

interface AttendanceStudent {
  name: string;
  studentId: string;
  batch: string;
  sessionAttended: number;
  totalSessions: number;
  attendancePercent: number;
  attendanceStatus: 'Good' | 'Average' | 'Low';
  lastAttendedSession: string;
}
interface QuizStudent {
  name: string;
  studentId: string;
  quizName: string;
  attempts: number;
  completionDate: string;
  score: number | null;   // 👈 allow NA
  result: 'Pass' | 'Fail' | 'NA';
  evaluationStatus: 'Evaluated' | 'Pending' | 'NA';
}

interface CourseCompletionStudent {
  name: string;
  studentId: string;
  courseCompletionStatus: 'Completed' | 'In Progress';
  eligibilityStatus: 'Eligible' | 'Not Eligible';
  reason: string | 'NA';
  certificateStatus: 'Approved' | 'Pending' | 'NA';
  certificateIssueDate: string | 'NA';
  trainerApproval: 'Approved' | 'Pending' | 'NA';
}



@Component({
  selector: 'app-student-management',
  imports: [FormsModule,CommonModule],
  templateUrl: './student-management.html',
  styleUrl: './student-management.css',
})
export class StudentManagement {
 activeTab: 'overview' | 'attendance' | 'quiz' | 'completion' = 'overview';
 activeTab1: 'course-1' | 'course-2' = 'course-1';
 activeTab2: 'batch-1' | 'batch-2' | 'batch-3' = 'batch-1';

   searchText = '';

  students: Student[] = [
    {
      name: 'Abishek M',
      studentId: '301245',
      email: 'abishek@gmail.com',
      batch: 'Batch 1',
      enrollmentDate: '26-12-2025',
      attendance: 40,
      status: 'Active'
    },
    {
      name: 'Abishek M',
      studentId: '301245',
      email: 'abishek@gmail.com',
      batch: 'Batch 1',
      enrollmentDate: '26-12-2025',
      attendance: 40,
      status: 'Active'
    },
   {
      name: 'Abishek M',
      studentId: '301245',
      email: 'abishek@gmail.com',
      batch: 'Batch 1',
      enrollmentDate: '26-12-2025',
      attendance: 40,
      status: 'Active'
    },
       {
      name: 'Abishek M',
      studentId: '301245',
      email: 'abishek@gmail.com',
      batch: 'Batch 1',
      enrollmentDate: '26-12-2025',
      attendance: 40,
      status: 'Active'
    },
       {
      name: 'Abishek M',
      studentId: '301245',
      email: 'abishek@gmail.com',
      batch: 'Batch 1',
      enrollmentDate: '26-12-2025',
      attendance: 40,
      status: 'Active'
    },
       {
      name: 'Abishek M',
      studentId: '301245',
      email: 'abishek@gmail.com',
      batch: 'Batch 1',
      enrollmentDate: '26-12-2025',
      attendance: 40,
      status: 'Active'
    },
       {
      name: 'Abishek M',
      studentId: '301245',
      email: 'abishek@gmail.com',
      batch: 'Batch 1',
      enrollmentDate: '26-12-2025',
      attendance: 40,
      status: 'Active'
    },
       {
      name: 'Abishek M',
      studentId: '301245',
      email: 'abishek@gmail.com',
      batch: 'Batch 1',
      enrollmentDate: '26-12-2025',
      attendance: 40,
      status: 'Active'
    },
       {
      name: 'Abishek M',
      studentId: '301245',
      email: 'abishek@gmail.com',
      batch: 'Batch 1',
      enrollmentDate: '26-12-2025',
      attendance: 40,
      status: 'Active'
    },
       {
      name: 'Abishek M',
      studentId: '301245',
      email: 'abishek@gmail.com',
      batch: 'Batch 1',
      enrollmentDate: '26-12-2025',
      attendance: 40,
      status: 'Active'
    },
       {
      name: 'Abishek M',
      studentId: '301245',
      email: 'abishek@gmail.com',
      batch: 'Batch 1',
      enrollmentDate: '26-12-2025',
      attendance: 40,
      status: 'Active'
    },
  ];

  // student attendance
  attendanceStudents: AttendanceStudent[] = [
  {
    name: 'Abishek M',
    studentId: '301245',
    batch: 'Batch 1',
    sessionAttended: 18,
    totalSessions: 25,
    attendancePercent: 72,
    attendanceStatus: 'Average',
    lastAttendedSession: '05-01-2026'
  },
  {
    name: 'Abishek M',
    studentId: '301246',
    batch: 'Batch 1',
    sessionAttended: 10,
    totalSessions: 25,
    attendancePercent: 40,
    attendanceStatus: 'Low',
    lastAttendedSession: '02-01-2026'
  },
    {
    name: 'Abishek M',
    studentId: '301245',
    batch: 'Batch 1',
    sessionAttended: 18,
    totalSessions: 25,
    attendancePercent: 90,
    attendanceStatus: 'Good',
    lastAttendedSession: '05-01-2026'
  },
      {
    name: 'Abishek M',
    studentId: '301245',
    batch: 'Batch 1',
    sessionAttended: 18,
    totalSessions: 25,
    attendancePercent: 90,
    attendanceStatus: 'Good',
    lastAttendedSession: '05-01-2026'
  },
      {
    name: 'Abishek M',
    studentId: '301245',
    batch: 'Batch 1',
    sessionAttended: 18,
    totalSessions: 25,
    attendancePercent: 90,
    attendanceStatus: 'Good',
    lastAttendedSession: '05-01-2026'
  },
      {
    name: 'Abishek M',
    studentId: '301245',
    batch: 'Batch 1',
    sessionAttended: 18,
    totalSessions: 25,
    attendancePercent: 10,
    attendanceStatus: 'Low',
    lastAttendedSession: '05-01-2026'
  },
  ];
  //Quiz Attendance
quizStudents: QuizStudent[] = [
  {
    name: 'Abishek M',
    studentId: '301245',
    quizName: 'Java Basics',
    attempts: 0,
    completionDate: '-',
    score: null,
    result: 'NA',
    evaluationStatus: 'NA'
  },
  {
    name: 'Abishek M',
    studentId: '301246',
    quizName: 'Spring Boot',
    attempts: 1,
    completionDate: '04-01-2026',
    score: 33,
    result: 'Fail',
    evaluationStatus: 'NA'
  },
  {
    name: 'Abishek M',
    studentId: '301247',
    quizName: 'Angular',
    attempts: 2,
    completionDate: '06-01-2026',
    score: 60,
    result: 'Pass',
    evaluationStatus: 'Pending'
  },
  {
    name: 'Abishek M',
    studentId: '301248',
    quizName: 'Spring Boot',
    attempts: 1,
    completionDate: '07-01-2026',
    score: 75,
    result: 'Pass',
    evaluationStatus: 'Evaluated'
  }
];

//certificate completion
completionStudents: CourseCompletionStudent[] = [
  {
    name: 'Abishek M',
    studentId: '301245',
    courseCompletionStatus: 'In Progress',
    eligibilityStatus: 'Not Eligible',
    reason: 'Low Attendance',
    certificateStatus: 'NA',
    certificateIssueDate: 'NA',
    trainerApproval: 'NA'
  },
  {
    name: 'Abishek M',
    studentId: '301246',
    courseCompletionStatus: 'Completed',
    eligibilityStatus: 'Eligible',
    reason: 'NA',
    certificateStatus: 'Pending',
    certificateIssueDate: 'NA',
    trainerApproval: 'Pending'
  },
  {
    name: 'Abishek M',
    studentId: '301247',
    courseCompletionStatus: 'Completed',
    eligibilityStatus: 'Eligible',
    reason: 'NA',
    certificateStatus: 'Approved',
    certificateIssueDate: '23-12-2025',
    trainerApproval: 'Approved'
  }
];




  get filteredStudents() {
    return this.students.filter(s =>
      s.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      s.studentId.includes(this.searchText)
    );
  }
  getAttendanceClass(percent: number): string {
  if (percent < 50) {
    return 'low-attendance';
  } else if (percent < 75) {
    return 'medium-attendance';
  } else {
    return 'high-attendance';
  }
}

}
