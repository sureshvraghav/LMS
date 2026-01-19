import { CommonModule } from '@angular/common';
import { Component ,EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-edit',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './edit.html',
  styleUrl: './edit.css',
   template: `
    <h3>Edit Batch</h3>

    <p><b>Course:</b> {{ data?.courseName }}</p>
    <p><b>Batch No:</b> {{ data?.batchNo }}</p>

    <button (click)="close.emit()">Back</button>
  `,
})
export class Edit {
    activeTab: 'modules' | 'students' = 'modules';

  batch = {
    courseName: 'CAPM® - Arabic Course - Beginner',
    batchNo: 2,
    trainingMode: 'Online',
    capacity: 20,
    startDate: '08/01/2026',
    endDate: '07/04/2026',
    primaryTrainer: 'Mr. Thariq A',
    backupTrainer: 'Mr. Sherif S'
  };

  modules = [
    { name: 'Module 1', no: 1, duration: '30 Hours', sessions: 10 },
    { name: 'Module 2', no: 1, duration: '30 Hours', sessions: 10 },
    { name: 'Module 3', no: 1, duration: '30 Hours', sessions: 10 }
  ];
   @Input() data: any;
  @Output() close = new EventEmitter<void>();
}
