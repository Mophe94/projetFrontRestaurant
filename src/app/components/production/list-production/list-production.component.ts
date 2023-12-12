import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Page} from "../../../shared/models/page.model";
import {ProductionTemplate} from "../../../shared/models/ProductionTemplate";
import {ProductionApiService} from "../../../service/production-api.service";
import {Observable, tap} from "rxjs";

@Component({
  selector: 'app-list-production',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-production.component.html',
  styleUrl: './list-production.component.css'
})
export class ListProductionComponent {

  productionTemplate?: Page<ProductionTemplate>;
  page: number = 0;

  constructor(private readonly $ProductionServ: ProductionApiService) {
    this.loadProductionItem()

  }

  loadProductionItem(){
    this.loadProduction(this.page).subscribe(data => this.productionTemplate = data)
  }

  previous() {
    if (this.page > 0) {
      const targetPage = this.page - 1;
      this.loadProduction(targetPage)
        .subscribe(rslt => this.page = rslt.number)
    }
  }

  next() {
    const targetPage = this.page + 1
    this.loadProduction(targetPage)
      .subscribe(rslt => this.page = rslt.number)
  }

  paginationTargetNumber(page: number) {
    const targerPage = page
    this.loadProduction(targerPage)
      .subscribe(rslt => this.page = rslt.number)
  }

  loadProduction(page: number): Observable<Page<ProductionTemplate>> {
    return this.$ProductionServ.getAllProductionTemplate(page,5).pipe(
      tap(response => this.productionTemplate = response)
    )
  }
}
