import { ValidatorFn, FormGroup, ValidationErrors, FormControl } from '@angular/forms';

export function ValidDate(): ValidatorFn {
  return (control: FormControl): ValidationErrors | null => {
      const value: string = control.value;

      if (isNaN(new Date(value).getDate())) {
          return ({ dateNotValid: true });
      }

      return null;
  };
}
