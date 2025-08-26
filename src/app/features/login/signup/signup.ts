import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup implements AfterViewInit {

  signUpForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  ngAfterViewInit() {


  }

  onSubmit() {
    if (this.signUpForm.valid) {
      // Handle successful signup
    } else {
      // Mark all fields as touched to show validation errors
      this.signUpForm.markAllAsTouched();
    }
  }

}
