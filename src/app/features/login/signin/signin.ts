import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth/auth.service';

@Component({
  selector: 'app-signin',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signin.html',
  styleUrl: './signin.css'
})
export class Signin {
  loginForm: FormGroup;
  visibility = false;
  constructor(private loginService: AuthService, private fb: FormBuilder, public router: Router) {
    this.loginForm = this.fb.group(
      {
        email: ['', [Validators.email, Validators.required]],
        password: ['', [Validators.minLength(6), Validators.required]]
      }
    )

  }

  toggleVisibility(id: string) {
    this.visibility = !this.visibility;
    const password = document.getElementById(id) as HTMLInputElement;
    password.type = (password.type == "password") ? "text" : "password";
  }

  forgotPassword() {
    this.router.navigate(['/login/forgot-password']);
  }

  onSubmit() {
    //this.loginService.logInUser({ id: "1", name: "Arturo", lastName:"Gonzalez", email: this.loginForm.value.email, token: "<token>", cart: [] });
    this.loginService.logUserByCredentials(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: val => {
        console.log(val)
        this.router.navigate(['/dashboard/home']);
      },
      error: err => console.log(err)
    })
  }
}
