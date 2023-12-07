import {HttpHeaders, HttpInterceptorFn} from '@angular/common/http';
import {inject} from "@angular/core";
import {AuthService} from "../../service/auth.service";

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const $authServ = inject( AuthService)

  let headers = new HttpHeaders();
  if( $authServ.token ){
    headers = headers.set('Authorization', `Bearer ${$authServ.token}`)
    req = req.clone({
      headers: headers
    })
  }

  return next(req)

};

