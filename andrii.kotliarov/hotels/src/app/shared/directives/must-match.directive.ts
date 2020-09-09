import { ValidatorFn, FormGroup, ValidationErrors, FormControl } from '@angular/forms';

export function MustMatch(controlName: string, compareToControlName: string): ValidatorFn {
  return (form: FormGroup): ValidationErrors | null => {
      const value: unknown = form.get(controlName).value;
      const valueToCompare: unknown = form.get(compareToControlName).value;

      if (value !== valueToCompare) {
          return ({ mustMatch: true });
      }

      return null;
  };
}
