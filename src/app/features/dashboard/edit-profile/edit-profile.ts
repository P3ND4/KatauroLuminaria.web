import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpService } from '../../../shared/services/http/http.service';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { User } from '../../../shared/models/User';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-profile',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-profile.html',
  styleUrl: './edit-profile.css'
})
export class EditProfile {
  editProfileForm: FormGroup;
  currentUser: User | undefined;
  constructor(private fb: FormBuilder, private http: HttpService, private loginS: AuthService) {
    this.editProfileForm = this.fb.group({
      name: [''],
      lastName: [''],
      email: ['', [Validators.email]],
      phone: [''],
      image: ['']

    });
    loginS.currentUser$.subscribe({
      next: val => {
        this.currentUser = val ?? undefined;
        this.editProfileForm.get('name')?.setValue(val?.name)
      }
    })
  }
  ngOnInit() {
    this.loginS.currentUser$.subscribe({
      next: user => {
        this.currentUser = user ?? undefined;
        this.editProfileForm.patchValue({
          name: user?.name ?? '',
          lastName: user?.lastName ?? '',
          phone: user?.phone,
          email: user?.email ?? '',
          image: user?.image ?? ''
        });
      }
    });
  }
  ngAfterViewInit() {


  }
  isValidForm(name: string) {
    return this.editProfileForm.get(name)?.valid || !this.editProfileForm.get(name)?.touched;
  }


  onSubmit() {
    if (this.editProfileForm.valid) {

      const user: CreateUserDto = {
        name: this.editProfileForm.get('name')?.value,
        lastName: this.editProfileForm.value.lastName,
        phone: this.editProfileForm.value.phone,
        password: this.editProfileForm.get('password')?.value,
        email: this.editProfileForm.get('email')?.value,
      }

      this.http.signUp(user).subscribe(
        {
          next: (value) => {
            console.log(value);

          },
          error(err) {
            console.log(err)
          }
        }
      )
    } else {
      // Mark all fields as touched to show validation errors
      this.editProfileForm.markAllAsTouched();
    }
  }
}
