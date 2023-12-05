import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterLink} from "@angular/router";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

   username$ = this.$authServ.username$
  isConnected$ = this.$authServ.connected$

  constructor(
    private readonly $authServ : AuthService,
    private router : Router
  ) {}


  logout(){
    this.$authServ.disconnect()
    this.router.navigateByUrl("login")
  }

}
