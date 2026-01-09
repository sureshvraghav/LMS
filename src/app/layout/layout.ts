import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../core/services/auth.service';


@Component({
  selector: 'app-layout',
  standalone:true,
  imports: [RouterModule],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout implements OnInit {
username: string = '';
  
 user = {
    name: 'Dharshan',
    greeting: 'Good Morning',
    notifications: 2,
    avatar: '/user.jpg'
  };
  constructor(
    private authService:AuthService,
    private API: HttpClient,
    private router:Router
  ) {}
  ngOnInit(): void {
        const token = localStorage.getItem('authToken');
        console.log("token"+token)
        const username=localStorage.getItem('currentUser');
        console.log(username)
  
  }
 
   getUserRole(): string {
    return this.authService.getrole() || 'USER';
  }
    getUserName():string {
    return localStorage.getItem('currentUser') || 'User';
  }
   getUserEmail(): string {
    return localStorage.getItem('useremail') || '';
  }
 

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  
}
