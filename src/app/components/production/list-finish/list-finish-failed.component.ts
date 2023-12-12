import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ModalStorageFormComponent} from "../../storage/modal-storage-form/modal-storage-form.component";
import {Page} from "../../../shared/models/page.model";
import {ProductionItem} from "../../../shared/models/ProductionItem";
import {ProductionApiService} from "../../../service/production-api.service";
import {Observable, tap} from "rxjs";

@Component({
  selector: 'app-list-finish-failed',
  standalone: true,
    imports: [CommonModule, ModalStorageFormComponent],
  templateUrl: './list-finish-failed.component.html',
  styleUrl: './list-finish-failed.component.css'
})
export class ListFinishFailedComponent {

  productionItems?: Page<ProductionItem>;
  page: number = 0;

  constructor(private readonly $ProductionServ: ProductionApiService) {
    this.loadProductionItem()

  }

  loadProductionItem(){
    this.loadProductionItems(this.page).subscribe(data => this.productionItems = data)
  }

  previous() {
    if (this.page > 0) {
      const targetPage = this.page - 1;
      this.loadProductionItems(targetPage)
        .subscribe(rslt => this.page = rslt.number)
    }
  }

  next() {
    const targetPage = this.page + 1
    this.loadProductionItems(targetPage)
      .subscribe(rslt => this.page = rslt.number)
  }

  paginationTargetNumber(page: number) {
    const targerPage = page
    this.loadProductionItems(targerPage)
      .subscribe(rslt => this.page = rslt.number)
  }

  loadProductionItems(page: number): Observable<Page<ProductionItem>> {
    return this.$ProductionServ.getAllFinish(page,5).pipe(
      tap(response => this.productionItems = response)
    )
  }
}
