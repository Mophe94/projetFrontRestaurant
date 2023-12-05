import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbPagination, NgbPaginationPages} from "@ng-bootstrap/ng-bootstrap";


const FILTER_PAG_REGEX = /[^0-9]/g;

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule, NgbPagination, NgbPaginationPages],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {

  page = 4;


  selectPage(page: string) {
    this.page = parseInt(page, 10) || 1;
  }

  formatInput(input: HTMLInputElement) {
    input.value = input.value.replace(FILTER_PAG_REGEX, '');
  }
}
