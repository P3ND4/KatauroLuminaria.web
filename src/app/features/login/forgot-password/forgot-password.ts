import { ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpService } from '../../../shared/services/http/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BoxLoader } from "../../../shared/components/box-loader/box-loader";

@Component({
  selector: 'app-forgot-password',
  imports: [ReactiveFormsModule, BoxLoader],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css'
})
export class ForgotPassword implements OnInit {
  @ViewChildren('codeInput') inputs!: QueryList<ElementRef>;
  forgotPasswordForm: FormGroup;
  email: string | undefined;
  loading = false;
  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef, private http: HttpService, private route: ActivatedRoute, private router: Router) {
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
          }
        }
      )
    }
  }
}
