import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../../shared/services/http/http.service';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { passwordMatchValidator } from '../../../shared/validators/passwordMissMatch.validator';
import { BoxLoader } from "../../../shared/components/box-loader/box-loader";
import { ErrorLogService } from '../../../shared/services/errors/error.log.service';
import { parseError } from '../../../shared/services/errors/errorParser';

@Component({
  selector: 'app-signup',
  imports: [CommonModule, ReactiveFormsModule, BoxLoader],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup implements AfterViewInit {
  visibility = [false, false]
  signUpForm: FormGroup;
  loading = false;
  selectedRegionCode = 2;
  openDropdown = false;
  constructor(private fb: FormBuilder, public router: Router, private http: HttpService, private loginS: AuthService, private errorServ: ErrorLogService) {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(7)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: passwordMatchValidator });
  }

  onSelectRegionCode(index: number) {
    this.selectedRegionCode = index;
    this.openDropdown = false;
  }

  ngAfterViewInit() {


  }

  onSubmit() {
    if (this.signUpForm.valid) {

      const user: CreateUserDto = {
        name: this.signUpForm.get('name')?.value,
        lastName: this.signUpForm.value.lastName,
        phone: this.regionCodes[this.selectedRegionCode].code + " " + this.signUpForm.value.phone,
        password: this.signUpForm.get('password')?.value,
        email: this.signUpForm.get('email')?.value,
      }

      this.loading = true;

      this.http.signUp(user).subscribe(
        {
          next: (value) => {
            console.log(value);
            this.login();
          },
          error: (err) => {
            console.log(err);
            this.loading = false;
            if (err.error.statusCode == 409) {
              this.errorServ.addError({ name: 'Email existente', error: 'Ya existe un usuario con ese email' });
            }
            else
              this.errorServ.addError(parseError(err));

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
        this.loading = false;
        this.router.navigate(['/dashboard/home']);
      },
      error: err => {
        this.loading = false;
        console.log(err);
        this.errorServ.addError(parseError(err));
      }

    })
  }

  toggleVisibility(id: string, pos: number) {
    this.visibility[pos] = !this.visibility[pos];
    const password = document.getElementById(id) as HTMLInputElement;
    password.type = (password.type == "password") ? "text" : "password";
  }
  passMisMatch() {
    return this.signUpForm.hasError('passwordMismatch') && this.signUpForm.get('confirmPassword')?.touched;
  }

  isValidForm(name: string) {
    return this.signUpForm.get(name)?.valid || !this.signUpForm.get(name)?.touched;
  }
  regionCodes = [
    { code: '+1', country: 'US' },   // Estados Unidos
    { code: '+52', country: 'MX' },
    { code: '+53', country: 'CU' },
    { code: '+54', country: 'AR' },
    { code: '+55', country: 'BR' },
    { code: '+56', country: 'CL' },
    { code: '+57', country: 'CO' },
    { code: '+58', country: 'VE' },

    { code: '+34', country: 'ES' },
    { code: '+33', country: 'FR' },
    { code: '+39', country: 'IT' },
    { code: '+49', country: 'DE' },
    { code: '+44', country: 'GB' },

    { code: '+351', country: 'PT' },
    { code: '+31', country: 'NL' },
    { code: '+32', country: 'BE' },
    { code: '+41', country: 'CH' },
    { code: '+43', country: 'AT' },

    { code: '+86', country: 'CN' },
    { code: '+81', country: 'JP' },
    { code: '+82', country: 'KR' },
    { code: '+91', country: 'IN' },

    { code: '+7', country: 'RU' },
    { code: '+20', country: 'EG' },
    { code: '+27', country: 'ZA' },
    { code: '+61', country: 'AU' },
  ];

}