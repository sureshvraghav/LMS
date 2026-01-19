import { Component, OnInit } from '@angular/core';
import { ForgotPassword } from '../forgot-password';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ForgotpasswordService } from '../../../core/services/forgotpassword/forgotpassword-service';

@Component({
  selector: 'app-new-password',
  imports: [RouterLink,FormsModule,ReactiveFormsModule,CommonModule,RouterLink,HttpClientModule],
  templateUrl: './new-password.html',
  styleUrl: './new-password.scss',
})
export class NewPassword implements OnInit {
message: string = '';
loading: boolean = false;
 email: string = '';
 newpassword={
  createpassword:'',
  confirmPassword:''

}
 constructor(
    private forgotpasswordservice:ForgotpasswordService ,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.email = localStorage.getItem('useremail') || '';
    console.log('New password email:', this.email);
  }
showPassword = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
   onSubmit(){
      if(!this.newpassword.createpassword||!this.newpassword.confirmPassword )
      {
            this.message = 'field cannot be empty';
      return;
      }

     if (this.newpassword.createpassword !== this.newpassword.confirmPassword) {
      console.log("password does not match")
      this.message = 'Passwords do not match';
      return;
    }
    console.log(this.email)
       const passwordupPayload = {
        
     id: this.email,
     password: this.newpassword.confirmPassword,
      
    };
    this.loading=true;
     this.forgotpasswordservice.updatepassword(passwordupPayload).subscribe({
      next:(res)=>{
     
        console.log("apihitting")
        this.loading = false;
         
        this.message='password updated successfully';
        console.log("email",res);
         setTimeout(() => this.router.navigate(['/login']), 800);
        // this.message = 'verified you email';
         if (res.data.email) {
              localStorage.setItem(this.email, res.data);
             
            }
            console.log("gowtham")
            console.log(res.status)
            console.log(res.data)
 
         if(res.staus===410)
          {
          this.message="Invalid or expired reset link"
          }   
          console.log(res.status)
        if(res.status===200)
        {
          console.log("")
          this.message="password reset successfully"
            setTimeout(() => this.router.navigate(['/']), 800);
        }
        
        
        
    },
    error:(err)=>{
      console.log(err.status)
      this.loading = false;
       if (err.status === 410) {
          this.message = 'Invalid or expired reset link';
        } else if (err.status === 0) {
          this.message = 'Unable to connect to server';
        } else if (err.error && err.error.message) {
          this.message = err.error.message;
        } else {
          this.message = 'Login failed. Please try again';
        }
    }
  })

  

   }
}
