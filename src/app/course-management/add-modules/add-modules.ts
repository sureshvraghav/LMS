import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {  EventEmitter, Output } from '@angular/core';


import { FormsModule } from '@angular/forms';

export interface Module {
  moduleId: string;
  moduleName: string;
  moduleDescription: string;
  moduleDuration: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
}
@Component({
  selector: 'app-add-modules',
  imports: [CommonModule,FormsModule],
  templateUrl: './add-modules.html',
  styleUrl: './add-modules.css',
})
export class AddModules {
    @Input() moduleCount!: number;  
    @Output() modulesAdded = new EventEmitter<Module[]>();

  modules: Module[] = [];

  ngOnInit() {
   this.modules = Array.from({ length: this.moduleCount }, (_, i) => ({
      moduleId: `MOD${(i + 1).toString().padStart(3, '0')}`,
      moduleName: '',
      moduleDescription: '',
      moduleDuration: '',
      startDate: '',
      endDate: '',
      startTime: '',
      endTime: ''
    }));
}
  module: Module = {
    moduleId: '',
    moduleName: '',
    moduleDescription: '',
    moduleDuration: '',
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: ''
  };
  addModule() {
    this.modules.push({ ...this.module });

    this.module = {
      moduleId: '',
      moduleName: '',
      moduleDescription: '',
      moduleDuration: '',
      startDate: '',
      endDate: '',
      startTime: '',
      endTime: ''
    };
  }

 submitModules() {
  console.log('Modules to submit', this.modules);
    this.modulesAdded.emit(this.modules);
  }
   SessionModal=false;
   showDeleteModal=false;

  openSessionModal(module: Module) {
    this.currentModule = module;
    this.SessionModal = true;
  }
  currentModule!: Module;


   closeSessionModal(){
    this.SessionModal=false;
   }

   openDeleteModal(){
    this.showDeleteModal=true;
   }

   closeDeleteModal(){
    this.showDeleteModal=false;
   }

     goBack() {
    history.back();
  }

  showSuccessModal = false;

openSuccessModal() {
  this.showSuccessModal = true;
}

closeSuccessModal() {
  this.showSuccessModal = false;
}



}
