import { Injectable } from '@angular/core';
import { ApiService } from '../core/services/api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private API: ApiService,private http: HttpClient) {}
  

  AddCourse(formData:FormData){
    return this.API.post('addnewcourses/uploa',formData)
  }

}
