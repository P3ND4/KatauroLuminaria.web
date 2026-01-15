import { ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpService } from '../../../shared/services/http/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BoxLoader } from "../../../shared/components/box-loader/box-loader";
import { parseError } from '../../../shared/services/errors/errorParser';
import { ErrorLogService } from '../../../shared/services/errors/error.log.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  imports: [ReactiveFormsModule, BoxLoader, DatePipe],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css'
})
export class ForgotPassword implements OnInit, OnDestroy {

  intervalId: number = 0;
  timeLeft: number = 5 * 60 * 1000; // 5 minutes in milliseconds

  @ViewChildren('codeInput') inputs!: QueryList<ElementRef>;
  forgotPasswordForm: FormGroup;
  email: string | undefined;
  loading = false;
  loadMsg = "Verificando código...";
  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef, private http: HttpService,
    private route: ActivatedRoute, private router: Router, private errorServ: ErrorLogService) {
    this.forgotPasswordForm = this.fb.group({
      f1: ['', [Validators.required, Validators.maxLength(1)]],
      f2: ['', [Validators.required, Validators.maxLength(1)]],
      f3: ['', [Validators.required, Validators.maxLength(1)]],
      f4: ['', [Validators.required, Validators.maxLength(1)]],
      f5: ['', [Validators.required, Validators.maxLength(1)]],
      f6: ['', [Validators.required, Validators.maxLength(1)]]
    });
  }
  ngOnInit(): void {
    this.email = this.route.snapshot.queryParamMap.get('email') ?? undefined;
    this.sendEmail();
  }

  sendEmail() {
    if (this.email) {
      this.loadMsg = "Enviando código...";
      this.loading = true;
      this.http.sendCode(this.email).subscribe(
        {
          next: val => {
            console.log(val);
            this.loading = false;
            this.startTimer();
          },
          error: err => {
            this.loading = false;
            console.log(err);
            if (err.error.statusCode == 404) this.errorServ.addError({ name: 'Usuario inexistente', error: 'No existe ningún usuario con ese correo' })
            else
              this.errorServ.addError(parseError(err));
            this.router.navigate(['/login/signin']);
          }
        }
      )

    }
  }


  startTimer() {
    this.timeLeft = 5 * 60 * 1000; // Reset to 5 minutes
    this.intervalId = window.setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft -= 1000;
      } else {
        this.stopTimer();
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.intervalId);
  }

  ngOnDestroy() {
    this.stopTimer();
  }



  onInput(event: Event, index: number) {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    input.value = value;

    if (value && index < this.inputs.length - 1) {
      this.inputs.toArray()[index + 1].nativeElement.focus();
    }
  }
  onKeyDown(event: KeyboardEvent, index: number) {
    if (event.key !== 'Backspace') return;

    if (this.inputs.toArray()[index].nativeElement.value) {
      // Caso 1: borra el valor actual
      this.forgotPasswordForm.get(`f${index + 1}`)?.setValue('');
      event.preventDefault();
      return;
    }

    // Caso 2: está vacío → vuelve al anterior
    if (index > 0) {
      this.inputs.toArray()[index - 1].nativeElement.focus();
      event.preventDefault();
    }
  }
  onPaste(event: ClipboardEvent) {
    event.preventDefault();

    const pasted = event.clipboardData?.getData('text').slice(0, this.inputs.length);

    if (!pasted) return;

    pasted.split('').forEach((char, i) => {
      this.forgotPasswordForm.get(`f${i + 1}`)?.setValue(char);
    });

    const lastIndex = pasted.length - 1;
    this.inputs.toArray()[lastIndex]?.nativeElement.focus();
    this.cdr.detectChanges();
  }

  onSubmit() {
    console.log(this.forgotPasswordForm.value);
    if (this.forgotPasswordForm.valid && this.email) {
      var code = '';
      for (let index = 0; index < 6; index++) {
        code += this.forgotPasswordForm.get(`f${index + 1}`)?.value
      }
      this.loadMsg = "Verificando código...";
      this.loading = true
      this.http.verifyCode(this.email, code).subscribe(
        {
          next: val => {
            console.log(val);
            this.loading = false;
            this.router.navigate(['login', 'change-pass'], { queryParams: { email: this.email } });
          },
          error: err => {
            console.log(err);
            this.loading = false;
            this.errorServ.addError(parseError(err));
          }
        }
      )
    }
  }
}
