import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-course-completion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-completion.html',
  styleUrl: './course-completion.css',
})
export class CourseCompletion {

  activeTab: 'active' | 'completed' = 'active';

  selectedCompletedIndex: number | null = null;

  /* ========== ACTIVE ARRAY ========== */
  activeCourses = [
    {
      title: 'CAPM® - Arabic Course - Module 2 Batch 1',
      image: '/course.jpg',
      hours: 122,
      startDate: '02-01-2026, 09:30 am'
    },

    {
      title: 'CAPM® - Arabic Course - Module 2 Batch 2',
      image: '/course.jpg',
      hours: 140,
      startDate: '02-01-2026, 01:30 pm'
    }
  ];

  /* ========== COMPLETED ARRAY ========== */
  completedCourses = [
    {
      title: 'CAPM® Certification Training Batch 1',
      image: '/course.jpg',
      timeline: 'Course Timeline',
      totalBatches: 3,
      startDate: '26-12-2025',
      endDate: '26-01-2026',
      progress: 65,

      batches: [
        {
          batchNumber: 'Batch 1',
          startDate: '26-12-2025',
          endDate: '26-01-2026',
          totalStudents: 12,
          completion: 65,
          status: 'In Progress'
        }
      ]
    },

    {
      title: 'CAPM® Certification Training Batch 2',
      image: '/course.jpg',
      timeline: 'Course Timeline',
      totalBatches: 3,
      startDate: '26-12-2025',
      endDate: '26-01-2026',
      progress: 55,
      batches: []
    }
  ];

  attachedFiles = [
  { name:'Module 1.pdf', size:'5.7 MB' },
  { name:'Module 1.mp4', size:'10.1 MB' }
];

showCompletionModal = false;

openCompletionModal() {
  this.showCompletionModal = true;
}

closeCompletionModal() {
  this.showCompletionModal = false;
}



}
