import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Link} from "../../shared/models/link";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {


  links : Link [] = [
    {
      title : 'home',
      url : 'home'
    },
    {
      title : 'Inventory',
      url : 'storage'
    },
    {
      title : "login",
      url : "login"
    }

  ]
}
