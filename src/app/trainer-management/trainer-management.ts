import { CommonModule, formatCurrency } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TrainerService } from './trainer-service';
import { Router } from '@angular/router';


export interface TrainerCard {
  title: string;
  value: string | number;
  image: string;
  badgeText?: string;
  badgeType?: 'info' | 'success' | 'danger';
}
// export interface Trainer {
//   adminid: string;
//   trainerid: string;
//   trainername: string;
//   personalemailid: string;
//   contactnumber: string;
//   dateofbirth: string;
//   address: string;
//   state: string;
//   city: string;
//   loginemail: string;
//   temporaraypassword: string;
//   areoferperience: string;
//   yearofexperience: string;
//   qualification: string;
//   languageknown: string;
//   attachresume: string;
//   assignedcourse: string;
//   assignedcourseid: string;
//   courselevel: string;
//   trainerstatus: string;
//   role: string;
//   abouttrainer: string;
// }
// export interface Trainer {
//   profile: string;
//   name: string;
//   trainerId: string;
//   course: string;
//   email: string;
//   onboardDate: string;
//   level: string;
//   status: 'Active' | 'Deactivated';
// }
export interface Trainer {
  file: string;               // profile / resume / placeholder
  trainername: string;
  trainerid: string;
  assignedcourse: string;
  loginemail: string;
  dateofbirth: string;
  courselevel: string;
  trainerstatus: 'Active' | 'Deactivated';
}

@Component({
  selector: 'app-trainer-management',
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './trainer-management.html',
  styleUrl: './trainer-management.css',
})
export class TrainerManagement {
  trainers: Trainer[] = [];

   constructor(private trainerService: TrainerService,
     private router: Router
     
   ) {}

   ngOnInit() {
    this.loadTrainers();
  }


cards: TrainerCard[] = [
    {
      title: 'Total Onboarded Trainers',
      value: 50,
      image: 'a-course.png',
      badgeText: '5% from December',
      badgeType: 'success',
    },
    {
      title: 'Total Active Trainers',
      value: 43,
      image: 'a-course.png',
      badgeText: '7% from December',
      badgeType: 'success',
    },
    {
      title: 'Total Courses Occupied',
      value: 22,
      image: 'a-cert.png',
      badgeText: '2 newly added',
      badgeType: 'info',
    },
    {
      title: 'Avg Trainer Ratings',
      value: '8.7/10',
      badgeText:'↓ 3% from December',
      badgeType:'danger',
      image: 'a-atten.png',
    },
    {
      title: 'Total Sessions Completed',
      value: 147,
      image: 'a-atten.png',
    },
  ];

  searchText = '';

  pageSize = 10;
  currentPage = 1;

  // trainers: Trainer[] = [
  //   {
  //     profile: '/user.jpg',
  //     name: 'Mr Thariq A',
  //     trainerId: '112233',
  //     course: 'CAPM® - Arabic Course',
  //     email: 'thariq@albayan.com',
  //     onboardDate: '01-01-2026',
  //     level: 'Intermediate',
  //     status: 'Active'
  //   },
  //   {
  //     profile: '/user.jpg',
  //     name: 'Mr Thariq A',
  //     trainerId: '112233',
  //     course: 'NA',
  //     email: 'thariq@albayan.com',
  //     onboardDate: '01-01-2026',
  //     level: 'Intermediate',
  //     status: 'Deactivated'
  //   },
  //   {
  //     profile: '/user.jpg',
  //     name: 'Mr Thariq A',
  //     trainerId: '112233',
  //     course: 'NA',
  //     email: 'thariq@albayan.com',
  //     onboardDate: '01-01-2026',
  //     level: 'Intermediate',
  //     status: 'Deactivated'
  //   },
  //   {
  //     profile: '/user.jpg',
  //     name: 'Mr Thariq A',
  //     trainerId: '112233',
  //     course: 'NA',
  //     email: 'thariq@albayan.com',
  //     onboardDate: '01-01-2026',
  //     level: 'Intermediate',
  //     status: 'Deactivated'
  //   },
  //   {
  //     profile: '/user.jpg',
  //     name: 'Mr Thariq A',
  //     trainerId: '112233',
  //     course: 'NA',
  //     email: 'thariq@albayan.com',
  //     onboardDate: '01-01-2026',
  //     level: 'Intermediate',
  //     status: 'Deactivated'
  //   },
  //   {
  //     profile: '/user.jpg',
  //     name: 'Mr Thariq A',
  //     trainerId: '112233',
  //     course: 'NA',
  //     email: 'thariq@albayan.com',
  //     onboardDate: '01-01-2026',
  //     level: 'Intermediate',
  //     status: 'Deactivated'
  //   },
  //   {
  //     profile: '/user.jpg',
  //     name: 'Mr Thariq A',
  //     trainerId: '112233',
  //     course: 'NA',
  //     email: 'thariq@albayan.com',
  //     onboardDate: '01-01-2026',
  //     level: 'Intermediate',
  //     status: 'Deactivated'
  //   },
  //   {
  //     profile: '/user.jpg',
  //     name: 'Mr Thariq A',
  //     trainerId: '112233',
  //     course: 'NA',
  //     email: 'thariq@albayan.com',
  //     onboardDate: '01-01-2026',
  //     level: 'Intermediate',
  //     status: 'Deactivated'
  //   },
  //   {
  //     profile: '/user.jpg',
  //     name: 'Mr Thariq A',
  //     trainerId: '112233',
  //     course: 'NA',
  //     email: 'thariq@albayan.com',
  //     onboardDate: '01-01-2026',
  //     level: 'Intermediate',
  //     status: 'Deactivated'
  //   },
  //   {
  //     profile: '/user.jpg',
  //     name: 'Mr Abishek A',
  //     trainerId: '112233',
  //     course: 'NA',
  //     email: 'thariq@albayan.com',
  //     onboardDate: '01-01-2026',
  //     level: 'Intermediate',
  //     status: 'Deactivated'
  //   },
  // ];

  get filteredTrainers(): Trainer[] {
    return this.trainers.filter(t =>
      t.trainername.toLowerCase().includes(this.searchText.toLowerCase()) ||
      t.trainerid.includes(this.searchText)
    );
  }

  getAllTrainers() {
    return this.trainerService.GetTrainers().subscribe((res:any)=>{
      console.log('Trainers fetched:', res);
      this.trainers = res;
    }
    );
  }


  loadTrainers() {
  this.trainerService.GetTrainers().subscribe({
    next: (res: any) => {
      const backendTrainers: Trainer[] = res.data || [];

     this.trainers = backendTrainers.map(t => ({
  file: t.file || 'placeholder.png', 
  trainername: t.trainername,
  trainerid: t.trainerid,
  assignedcourse: t.assignedcourse || 'NA',
  loginemail: t.loginemail,
  dateofbirth: t.dateofbirth,
  courselevel: t.courselevel,
  trainerstatus: t.trainerstatus?.toUpperCase() === 'ACTIVE' ? 'Active' : 'Deactivated'
}));

    },
    error: (err: any) => console.error(err)
  });
}

  get paginatedTrainers(): Trainer[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredTrainers.slice(start, start + this.pageSize);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredTrainers.length / this.pageSize);
  }

  changePageSize(event: Event) {
    this.pageSize = +(event.target as HTMLSelectElement).value;
    this.currentPage = 1;
  }

  goToPage(page: number) {
    this.currentPage = page;
  }

  prevPage() {
    if (this.currentPage > 1) this.currentPage--;
  }

  nextPage() {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }

 editTrainer(trainer: Trainer) {
  console.log('Edit trainer:', trainer);
  this.router.navigate(['/edit-trainer', trainer.trainerid]);
}


}
