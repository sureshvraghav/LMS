import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { liveclass } from '../../../core/services/liveclass/liveclass';
import { RouterLink } from '@angular/router';
export interface Course {
  courseid: string;
  coursename: string;
}
export interface Createbatch{
 
  // course: Course | null;
    course: Course | null;
  batchNo: string | number;
  trainingMode: string;
  capacity: string | number;
  startDate: string;
  endDate: string;

}
export interface CreateBatchPayload {
  courseid: string;
  batchno: string | number;
  trainingmode: string;
  studentcapacity: string | number;
  startdate: string;
  enddate: string;
}
@Component({
  selector: 'app-create-batch',
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './create-batch.html',
  styleUrl: './create-batch.scss',
})
export class CreateBatch {
  constructor(private service:liveclass){}
      course: Course[] = [];
      
  ngOnInit(): void {
         this.getLiveCourses();
  }

batch: Createbatch = {
  course: null,   
  batchNo: '',
  trainingMode: '',
  capacity: '',
  startDate: '',
  endDate: ''
};
goBack() {
    history.back();
  }

    getLiveCourses() {
    this.service.liveclassdata().subscribe({
      next: (res: any) => {
          this.course = res.data.map((item: any) => ({
        courseid: item.courseid,
        coursename: item.coursename
      }));
        console.log(this.course)
      
      },
      error: (err) => {
        console.error('Error fetching courses', err);
      }
    });
  }



createBatch() {
   if (!this.batch.course) {
    console.log('Course is undefined or not selected');
    return;
  }
    const CreateBatchPayload = {
    courseid: this.batch.course?.courseid,
    coursename: this.batch.course?.coursename,
    batchno: this.batch.batchNo,
    trainingmode: this.batch.trainingMode,
    studentcapacity: this.batch.capacity,
    startdate: this.batch.startDate,
    enddate: this.batch.endDate,
     status:"D"
  };


   
    this.service.addbatchdata(CreateBatchPayload).subscribe({
      next: (res: any) => {
         alert('batch data added successfully');
          this.course = res.data.map((item: any) => ({
        courseid: item.courseid,
        coursename: item.coursename,
       
      }));
        console.log(this.course)
      
      },
      error: (err) => {
        console.error('Error fetching courses', err);
      }
    });
    
  // console.log(CreateBatchPayload +"hlo")
  // console.log("Payload:", JSON.stringify(CreateBatchPayload, null, 2));

  console.log('Submitted Batch Data:', this.batch);
 console.log('Submitted Batch Data:', this.batch.course);
  console.log('Course ID:', this.batch.course?.courseid);
    console.log('Course ID:', this.batch.course?.coursename);
  // console.log('Course Name:', this.batch.course.coursename);

  // API call example
  // this.batchService.createBatch(this.batch).subscribe(...)
}
  // --


  courseOptions = [
    '1 Month',
    '3 Months',
    '6 Months',
    '12 Months'
  ];

  batchNos = [1, 2, 3, 4, 5];

  trainingModes = [
    'Online',
    'Recorded Session'
  ];
   
}
