import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";



export function passwordsMatchValidator(control: AbstractControl) {
    const password = control.parent?.get('password').value;
    const confirmPassword = control?.value;

    if (password !== confirmPassword) {
      return { passwordsNotMatch: true };
    }

    return null;
  }