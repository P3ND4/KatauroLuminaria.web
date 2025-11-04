import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../../shared/services/http/http.service';
import { AuthService } from '../../../shared/services/auth/auth.service';

@Component({
  selector: 'app-signup',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup implements AfterViewInit {
  visibility = [false, false]
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder, public router: Router, private http: HttpService, private loginS: AuthService) {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  ngAfterViewInit() {


  }

  onSubmit() {
    if (this.signUpForm.valid) {

      const user: CreateUserDto = {
        name: this.signUpForm.get('name')?.value,
        lastName: this.signUpForm.value.lastName,
        password: this.signUpForm.get('password')?.value,
        email: this.signUpForm.get('email')?.value,
      }

      this.http.signUp(user).subscribe(
        {
          next: (value)=> {
            console.log(value);
            this.login();
          },
          error(err) {
            console.log(err)
          }
        }
      )
    } else {
      // Mark all fields as touched to show validation errors
      this.signUpForm.markAllAsTouched();
    }
  }

  login() {
    this.loginS.logUserByCredentials(this.signUpForm.value.email, this.signUpForm.value.password).subscribe({
      next: val => {
        console.log(val)
        this.router.navigate(['/dashboard/home']);
      },
      error: err => console.log(err)

    })
  }

  toggleVisibility(id: string, pos: number){
    this.visibility[pos] = !this.visibility[pos];
    const password = document.getElementById(id) as HTMLInputElement;
    password.type = (password.type == "password") ? "text" : "password";
  }

}
