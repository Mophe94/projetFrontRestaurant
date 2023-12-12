import { Routes } from '@angular/router';
import {HomeComponent} from "./layout/home/home.component";
import {Page404Component} from "./layout/page404/page404.component";
import {StorageComponent} from "./components/storage/storage.component";
import {LoginComponent} from "./components/login/login.component";
import {ProductionComponent} from "./components/production/production.component";

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'storage', component: StorageComponent},
  {path: 'production', component: ProductionComponent},
  {path: 'login', component :LoginComponent},
  {path: '404', component: Page404Component},
  {path: '**', redirectTo:'404'}
];
