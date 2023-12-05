import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Storage} from "../../shared/models/storage";
import {StorageApiService} from "../../service/storage-api.service";
import {Page} from "../../shared/models/page.model";
import {Observable, tap} from "rxjs";
import {ModalStorageFormComponent} from "../modal-storage-form/modal-storage-form.component";

@Component({
  selector: 'app-storage',
  standalone: true,
  imports: [CommonModule, ModalStorageFormComponent],
  templateUrl: './storage.component.html',
  styleUrl: './storage.component.css'
})
export class StorageComponent {

  storages?: Page<Storage>;
  page: number = 0;

  constructor(private readonly $storageServ: StorageApiService) {
    this.loadStorages()
  }

  loadStorages(){
    this.loadStorage(this.page).subscribe(data => this.storages = data)
  }

  previous() {
    if (this.page > 0) {
      const targetPage = this.page - 1;
      this.loadStorage(targetPage)
        .subscribe(rslt => this.page = rslt.number)
    }
  }

  next() {
    const targetPage = this.page + 1
    this.loadStorage(targetPage)
      .subscribe(rslt => this.page = rslt.number)
  }

  paginationTargetNumber(page: number) {
    const targerPage = page
    this.loadStorage(targerPage)
      .subscribe(rslt => this.page = rslt.number)
  }

  loadStorage(page: number): Observable<Page<Storage>> {
    return this.$storageServ.getAll(page).pipe(
      tap(response => this.storages = response)
    )
  }


}
