import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidators{
    public static get number(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            if(!control.value) {
                return null;
            }

            return typeof control.value === 'number' ? null : {number: true};
        };
      }
}