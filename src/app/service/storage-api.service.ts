import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Storage} from "../shared/models/storage";
import {Page} from "../shared/models/page.model";

@Injectable({
  providedIn: 'root'
})
export class StorageApiService {

  constructor(private client: HttpClient) {
  }

  getAll(page: number): Observable<Page<Storage>> {
    return this.client.get<Page<Storage>>('http://localhost:8080/storage/all?page=' + page)
  }
}
