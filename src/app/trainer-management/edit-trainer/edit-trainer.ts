import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TrainerService } from '../trainer-service';

export interface Trainer {
  adminid: string;
  trainerid: string;
  trainername: string;
  personalemailid: string;
  contactnumber: string;
  dateofbirth: string;
  address: string;
  state: string;
  city: string;
  loginemail: string;
  temporaraypassword: string;
  areoferperience: string;
  yearofexperience: string;
  qualification: string;
  languageknown: string;
  attachresume: string;
  assignedcourse: string;
  assignedcourseid: string;
  courselevel: string;
  trainerstatus: string;
  role: string;
  abouttrainer: string;
}

@Component({
  selector: 'app-edit-trainer',
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './edit-trainer.html',
  styleUrl: './edit-trainer.css',
})
export class EditTrainer {
  constructor( private route: ActivatedRoute,
  private router: Router,
  private trainerService: TrainerService) {}

  trainerid!: string;
  ngOnInit() {
    this.trainerid = this.route.snapshot.paramMap.get('trainerid') || '';

  if (this.trainerid) {
    this.loadTrainer();
  }
  }
trainer: Trainer = {
  adminid: '',
  trainerid: '12344',
  trainername: '',
  personalemailid: '',
  contactnumber: '',
  dateofbirth: '',
  address: '',
  state: '',
  city: '',
  loginemail: '',
  temporaraypassword: '',
  areoferperience: '',
  yearofexperience: '',
  qualification: '',
  languageknown: '',
  attachresume: '',
  assignedcourse: '',
  assignedcourseid: '',
  courselevel: '',
  trainerstatus: '',
  role: 'ADMIN',
  abouttrainer: ''
};

loadTrainer() {
  this.trainerService.getTrainerById(this.trainerid).subscribe({
    next: (res) => {
      this.trainer = res.data;  
    },
    error: (err) => {
      console.error(err);
      alert('Trainer not found');
    }
  });
}



submitTrainer() {
  this.trainerService.updateTrainer(this.trainerid, this.trainer)
    .subscribe({
      next: (res) => {
        alert('Trainer updated successfully');
        this.router.navigate(['/trainer-management']);
      },
      error: (err) => {
        console.error(err);
        alert('Update failed');
      }
    });
}




deactivateTrainer() {
  if (!confirm('Are you sure you want to deactivate this trainer?')) return;

  const payload = {
    trainerstatus: 'Deactivated'
  };

  this.trainerService
    .updateTrainer(this.trainerid, payload)
    .subscribe({
      next: () => {
        this.trainer.trainerstatus = 'Deactivated';
        alert('Trainer Deactivated Successfully');
      },
      error: (err) => console.error(err)
    });
}


}
