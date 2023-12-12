import {Injectable, numberAttribute} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Page} from "../shared/models/page.model";
import {ProductItem} from "../shared/models/productItem";

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  constructor(private client: HttpClient) { }

  getAll(page : number, countByPage : number ) : Observable<Page<ProductItem>>{
    return this.client.get<Page<ProductItem>>("http://localhost:8080/productitem/all?page=" +page+ "&countByPage="+countByPage)
  }

  getAllForOneStorage(page : number, idStorage: number) : Observable<Page<ProductItem>>{
    return this.client.get<Page<ProductItem>>("http://localhost:8080/productitem/all/" + idStorage +"?page=" + page )
  }

  create(product : ProductItem) : Observable<ProductItem>{
    return this.client.post<ProductItem>("http://localhost:8080/productitem",product);
  }
}
