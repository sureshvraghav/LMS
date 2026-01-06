import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class liveclass {
   constructor(private API: ApiService,private http: HttpClient) {}


    liveclass() {
    return this.API.get('/addnewcourses/getallcourses');
    }
}