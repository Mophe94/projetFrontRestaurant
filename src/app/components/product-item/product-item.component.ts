import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Page} from "../../shared/models/page.model";
import {ProductItem} from "../../shared/models/productItem";
import {StorageApiService} from "../../service/storage-api.service";
import {Observable, tap} from "rxjs";
import {Storage} from "../../shared/models/storage";

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {

  productItem? : Page<ProductItem>
//   page: number
//
//   constructor() {
//   }
//
//   constructor(private readonly $storageServ: StorageApiService) {
//     this.loadStorage(this.page).subscribe()
//   }
//
//   previous() {
//     if (this.page > 0) {
//       const targetPage = this.page - 1;
//       this.loadStorage(targetPage)
//         .subscribe(rslt => this.page = rslt.number)
//     }
//   }
//
//   next() {
//     const targetPage = this.page + 1
//     this.loadStorage(targetPage)
//       .subscribe(rslt => this.page = rslt.number)
//   }
//
//   paginationTargetNumber(page: number) {
//     const targerPage = page
//     this.loadStorage(targerPage)
//       .subscribe(rslt => this.page = rslt.number)
//   }
//
//   loadStorage(page: number): Observable<Page<Storage>> {
//     return this.$storageServ.getAll(page).pipe(
//       tap(response => this.storages = response)
//     )
//   }
//
// }
