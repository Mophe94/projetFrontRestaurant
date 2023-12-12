import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListINPROGRESSComponent} from "./list-in-progress/list-in-progress.component";
import {ListFinishFailedComponent} from "./list-finish/list-finish-failed.component";
import {ListProductionComponent} from "./list-production/list-production.component";
import {ListFailedComponent} from "./list-failed/list-failed.component";

@Component({
  selector: 'app-production',
  standalone: true,
  imports: [CommonModule, ListINPROGRESSComponent, ListFinishFailedComponent, ListProductionComponent, ListFailedComponent],
  templateUrl: './production.component.html',
  styleUrl: './production.component.css'
})
export class ProductionComponent {


}
