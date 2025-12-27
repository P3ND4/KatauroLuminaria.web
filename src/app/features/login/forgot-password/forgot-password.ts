import { ChangeDetectorRef, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  imports: [ReactiveFormsModule],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css'
})
export class ForgotPassword {
  @ViewChildren('codeInput') inputs!: QueryList<ElementRef>;
  forgotPasswordForm: FormGroup;

  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef) {
    this.forgotPasswordForm = this.fb.group({
      f1: ['', [Validators.required, Validators.maxLength(1)]],
      f2: ['', [Validators.required, Validators.maxLength(1)]],
      f3: ['', [Validators.required, Validators.maxLength(1)]],
      f4: ['', [Validators.required, Validators.maxLength(1)]],
      f5: ['', [Validators.required, Validators.maxLength(1)]],
      f6: ['', [Validators.required, Validators.maxLength(1)]]
    });
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
  }
}
