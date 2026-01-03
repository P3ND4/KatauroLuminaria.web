import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { HttpService } from '../../../shared/services/http/http.service';
import { BoxLoader } from "../../../shared/components/box-loader/box-loader";

@Component({
  selector: 'app-signin',
  imports: [CommonModule, ReactiveFormsModule, BoxLoader],
  templateUrl: './signin.html',
  styleUrl: './signin.css'
})
export class Signin {
  loginForm: FormGroup;
  visibility = false;
  loading = false;
  loadMsg = "Iniciando sesión...";
  constructor(private loginService: AuthService, private fb: FormBuilder, public router: Router, private http: HttpService) {
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
    const emailForm = this.loginForm.get('email');
    if (emailForm?.valid) {
      this.loadMsg = "Enviando código...";
      this.loading = true;
      this.http.sendCode(emailForm.value).subscribe(
        {
          next: val => {
            console.log(val);
            this.loading = false;
            this.router.navigate(['/login/forgot-password'], { queryParams: { email: this.loginForm.get('email')?.value } });

          },
          error: err => {
            this.loading = false;
            console.log(err);
          }
        }
      )

    }
  }

  onSubmit() {
    //this.loginService.logInUser({ id: "1", name: "Arturo", lastName:"Gonzalez", email: this.loginForm.value.email, token: "<token>", cart: [] });
    if (this.loginForm.valid) {
      this.loadMsg = "Iniciando sesión...";
      this.loading = true;
      this.loginService.logUserByCredentials(this.loginForm.value.email, this.loginForm.value.password).subscribe({
        next: val => {
          console.log(val)
          this.loading = false;
          this.router.navigate(['/dashboard/home']);
        },
        error: err => {
          this.loading = false;
          console.log(err);
        }
      })
    }
  }
}
