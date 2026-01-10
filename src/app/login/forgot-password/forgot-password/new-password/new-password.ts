import { Component } from '@angular/core';

@Component({
  selector: 'app-new-password',
  imports: [],
  templateUrl: './new-password.html',
  styleUrl: './new-password.css',
})
export class NewPassword {
showPassword = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
