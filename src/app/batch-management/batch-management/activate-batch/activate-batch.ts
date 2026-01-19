
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { EventEmitter, Input, Output } from '@angular/core';
import { liveclass } from '../../../core/services/liveclass/liveclass';

@Component({
  selector: 'app-activate-batch',
  standalone:true,
  imports: [FormsModule,CommonModule],
  templateUrl: './activate-batch.html',
  styleUrl: './activate-batch.css',
})
export class ActivateBatch implements OnInit{

  //  activeTab: 'modules' | 'students' = 'modules';
    constructor(private service:liveclass){}
    ngOnInit() {
  this.getallbatch();
}


getallbatch() {
  this.service.getallbatch().subscribe({
    next: (res) => console.log('SUCCESS:', res),
    error: (err) => console.error('FAILED:', err)
  });
}


    
  batch = {
    courseName: 'CAPM® - Arabic Course - Beginner',
    batchNo: 2,
    trainingMode: 'Online',
    capacity: 20,
    startDate: '2026-01-08',
    endDate: '2026-04-07',
    primaryTrainer: 'Mr. Thariq A',
    backupTrainer: 'Mr. Sherif S'
  };


 


  goback()
  {
    history.back()
  }

  

  modules = [
    { name: 'Module 1', no: 1, duration: '30 Hours', sessions: 10, status: 'Updated' },
    { name: 'Module 2', no: 1, duration: '30 Hours', sessions: 10, status: 'Updated' },
    { name: 'Module 3', no: 1, duration: '30 Hours', sessions: 10, status: 'Updated' },
    { name: 'Module 4', no: 1, duration: '30 Hours', sessions: 10, status: 'Updated' }
  ];

   @Input() course: any;   
  @Output() close = new EventEmitter<void>();

}
