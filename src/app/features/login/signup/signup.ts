import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../../shared/services/http/http.service';

@Component({
  selector: 'app-signup',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup implements AfterViewInit {

  signUpForm: FormGroup;

  constructor(private fb: FormBuilder, public router: Router, private http: HttpService) {
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
        name : this.signUpForm.get('name')?.value + " " + this.signUpForm.get('lastName')?.value,
        password: this.signUpForm.get('password')?.value,
        email: this.signUpForm.get('email')?.value
      }
      
      this.http.signUp(user).subscribe(
        {
          next(value) {
            console.log(value)
          },
          error(err){
            console.log(err)
          }
        } 
      )
    } else {
      // Mark all fields as touched to show validation errors
      this.signUpForm.markAllAsTouched();
    }
  }

}
