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

  create(storage :Storage) : Observable<Storage>{
    return this.client.post<Storage>('http://localhost:8080/storage/add',storage)
  }

  delete(idStorageToDelete :number) : Observable<Storage>{
    return this.client.delete<Storage>('http://localhost:8080/storage/'+idStorageToDelete)
  }

  update(id : number,storage : Storage) : Observable<Storage>{
    return  this.client.put<Storage>('http://localhost:8080/storage/'+id,storage)
  }
}
