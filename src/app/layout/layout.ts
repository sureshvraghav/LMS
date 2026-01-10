import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone:true,
  imports: [RouterModule],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {
 user = {
    name: 'Abishek',
    greeting: 'Good Morning',
    notifications: 2,
    avatar: '/user.jpg'
  };
  
}
