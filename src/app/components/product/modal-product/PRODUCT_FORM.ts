import {AbstractControl, ValidationErrors, Validators} from "@angular/forms";

export const PRODUCT_FORM = {


  'quantity' : [null,[Validators.required]],
  'expireDate' : [null,[Validators.required]],
  'nameProductTemplate' : [null,Validators.required],
  'storageId' : [null,[Validators.required]]
}


