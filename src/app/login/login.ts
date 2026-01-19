import { AuthService } from './../core/services/auth.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
interface User {
  id: string;
  token: string;
  useremail: string;
  role: string;
}
interface LoginResponse {
  status: number;
  message: string;

  data: {
    role: any;
    user: string;
    token: string;
  };
}

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [RouterModule,FormsModule,CommonModule,RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
    showPassword = false;
     loading: boolean = false;
  private userKey = 'currentUser';
  private tokenKey = 'authToken';
  private roleKey = 'role';
  private idKey = 'userId';
  private emailKey = 'useremail';
   message: string = '';
login={
  email:'',
  password:''
}
   constructor(
    private authService: AuthService,
    private router: Router,
     private route:ActivatedRoute
  ) {}
    // ngOnInit():void{
    //   if(this.authService.isAuthenticated())
    //   {
    //     this.route.queryParams.subscribe((params:any)=>{
    //       const redirecturl=params['returnUrl']
    //       if(redirecturl)
    //       {
    //         this.router.navigate([redirecturl], { replaceUrl: true });
    //       }
    //     })
    //     const currenturl=this.router.url;
    //    if(currenturl=='/'||currenturl=='/login')
    //    {
    //      this.router.navigate(['/'], { replaceUrl: true });
    //    }
        
    //   }
    // }
onSubmit()
{
  console.log("sucess")
  if(!this.login.email||!this.login.password)
  {
    this.message="please fill in all fields"
    return;
  }
this.loading=true;
  this.authService.login(this.login.email,this.login.password).subscribe({
    next:(res)=>{
        this.loading = false;
        //  console.log("login successfully",res);
     
        this.message = 'Login Successful';
        setTimeout(() => this.router.navigate(['/dashboard']), 800);
        
    },
    error:(err)=>{
      console.log(err)
      this.loading = false;
       if (err.status === 401) {
          this.message = 'Invalid username or password';
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
  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
