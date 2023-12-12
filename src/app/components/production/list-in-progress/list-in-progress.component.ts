import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ModalStorageFormComponent} from "../../storage/modal-storage-form/modal-storage-form.component";
import {Page} from "../../../shared/models/page.model";
import {Observable, tap} from "rxjs";
import {ProductionApiService} from "../../../service/production-api.service";
import {ProductionItem} from "../../../shared/models/ProductionItem";

@Component({
  selector: 'app-list-in-progress',
  standalone: true,
  imports: [CommonModule, ModalStorageFormComponent],
  templateUrl: './list-in-progress.component.html',
  styleUrl: './list-in-progress.component.css'
})
export class ListINPROGRESSComponent {

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

  loadProductionItems(page: number): Observable<Page<ProductionItem>> {
    return this.$ProductionServ.getAllINProgress(page,5).pipe(
      tap(response => this.productionItems = response)
    )
  }


}
