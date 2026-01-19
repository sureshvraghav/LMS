import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class liveclass {
   constructor(private API: ApiService,private http: HttpClient) {}


    liveclassdata() {
    return this.API.get('addnewcourses/getallcourses');
    }
    addbatchdata(data:any)
    {
     return this.API.post('batch/add',data);
     }
    getallbatch()
    {
      return this.API.get('batch/getallbatch');
    }


}