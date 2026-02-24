import { AbstractControl, ValidationErrors } from "@angular/forms";

export const passwordMatchValidator = (control: AbstractControl,
    passwordFormName: string = 'password', confirmFormName: string = 'confirmPassword'): ValidationErrors | null => {
    const password = control.get(passwordFormName)?.value;
    const confirm = control.get(confirmFormName)?.value;
    return password === confirm ? null : { passwordMismatch: true };
}