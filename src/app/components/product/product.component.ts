import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ModalStorageFormComponent} from "../storage/modal-storage-form/modal-storage-form.component";
import {Page} from "../../shared/models/page.model";
import {Observable, tap} from "rxjs";
import {ProductItem} from "../../shared/models/productItem";
import {ProductApiService} from "../../service/product-api.service";
import {ModalProductComponent} from "./modal-product/modal-product.component";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ModalStorageFormComponent, ModalProductComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  products?: Page<ProductItem>;
  page: number = 0;
  idStorage?: number;
  constructor(private readonly $productionItemServ: ProductApiService) {
    this.loadProducts()
  }

  loadProducts(){
    if (this.idStorage){
      this.loadProductForOneStorage(this.idStorage,this.page).subscribe(data => this.products = data)
    }else{
      this.loadProductForAllStorage(this.page,).subscribe(data => this.products = data)
    }
  }

  previous() {
    if (this.page > 0) {
      const targetPage = this.page - 1;
      this.loadProductForAllStorage(targetPage)
        .subscribe(rslt => this.page = rslt.number)
    }
  }

  next() {
    const targetPage = this.page + 1
    this.loadProductForAllStorage(targetPage)
      .subscribe(rslt => this.page = rslt.number)
  }

  loadProductForOneStorage(idStorage : number,page:number) :Observable<Page<ProductItem>>{
    return this.$productionItemServ.getAllForOneStorage(page,idStorage)
  }

  loadProductForAllStorage(page: number): Observable<Page<ProductItem>> {
    return this.$productionItemServ.getAll(page,10).pipe(
      tap(response => this.products = response)
    )
  }
}
