import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {HTTP_INTERCEPTORS, provideHttpClient, withInterceptors} from "@angular/common/http";
import {authInterceptor} from "./core/interceptor/auth.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),provideHttpClient(),
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
};
