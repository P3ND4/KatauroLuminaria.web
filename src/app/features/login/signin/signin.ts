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

  constructor(private loginService: AuthService, private fb: FormBuilder, public router: Router) {
    this.loginForm = this.fb.group(
      {
        email: ['', [Validators.email, Validators.required]],
        password: ['', [Validators.minLength(6)]]
      }
    )

  }



  onSubmit() {
    //this.loginService.logInUser({ id: "1", name: "Arturo", lastName:"Gonzalez", email: this.loginForm.value.email, token: "<token>", cart: [] });
    this.loginService.logUserByCredentials(this.loginForm.value.email, this.loginForm.value.password)
    this.router.navigate(['/dashboard/home']);
  }
}
