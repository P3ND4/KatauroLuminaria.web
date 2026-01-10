import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../../../shared/validators/passwordMissMatch.validator';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../../shared/services/http/http.service';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { BoxLoader } from "../../../shared/components/box-loader/box-loader";
import { parseError } from '../../../shared/services/errors/errorParser';
import { ErrorLogService } from '../../../shared/services/errors/error.log.service';


@Component({
  selector: 'app-change-pass',
  imports: [ReactiveFormsModule, CommonModule, BoxLoader],
  templateUrl: './change-pass.html',
  styleUrl: './change-pass.css'
})
export class ChangePass {
  changePassForm: FormGroup;
  visibility = [false, false];
  email: string | undefined;
  loading = false;


  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router,
    private http: HttpService, private loginS: AuthService, private errorServ: ErrorLogService) {
    this.email = route.snapshot.queryParamMap.get('email') ?? undefined;
    this.changePassForm = fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]]
      }, {
      validators: passwordMatchValidator
    }
    )
  }
  toggleVisibility(id: string, pos: number) {
    this.visibility[pos] = !this.visibility[pos];
    const password = document.getElementById(id) as HTMLInputElement;
    password.type = (password.type == "password") ? "text" : "password";
  }
  passMisMatch() {
    return this.changePassForm.hasError('passwordMismatch') && this.changePassForm.get('confirmPassword')?.touched;
  }

  isValidForm(name: string) {
    return this.changePassForm.get(name)?.valid || !this.changePassForm.get(name)?.touched
  }

  login() {
    this.loginS.logUserByCredentials(this.email!, this.changePassForm.value.password).subscribe({
      next: val => {
        console.log(val);
        this.loading = false;
        this.router.navigate(['/dashboard/home']);
      },
      error: err => {
        console.log(err);
        this.loading = false;
        this.errorServ.addError(parseError(err));
      }

    })
  }

  onSubmit() {
    if (this.changePassForm.valid && this.email) {
      this.loading = true;
      this.http.changePassword(this.email, this.changePassForm.get('password')!.value).subscribe({
        next: val => {
          console.log(val);
          this.login();
        },
        error: err => {
          this.loading = false;
          console.log(err);
          this.errorServ.addError(parseError(err));
        }
      })
    }
  }
}
