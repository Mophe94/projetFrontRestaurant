import {AbstractControl, ValidationErrors, Validators} from "@angular/forms";

export const STORAGE_FORM = {

  'name' :  [null,[Validators.required]],
  'storageType' :  [null,[typeInvalid]]
}


function typeInvalid(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  const acceptedValues = ['DRY','REFRIGIRATED','FROZEN']
  if (acceptedValues.includes(value))
    return null

  return {
  typeInvalid : "Type should be either 'DRY', 'REFRIGIRATED' or 'FROZEN' "
  }
}

