import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Page} from "../shared/models/page.model";
import {ProductionItem} from "../shared/models/ProductionItem";
import {ProductionTemplate} from "../shared/models/ProductionTemplate";

@Injectable({
  providedIn: 'root'
})
export class ProductionApiService {

  constructor(private client:HttpClient) { }

  getAllINProgress(page : number,countByPage : number) : Observable<Page<ProductionItem>>{
    return  this.client.get<Page<ProductionItem>>("http://localhost:8080/production/allinprogress?page=" + page + "&countByPage="+ countByPage)

  }
  getAllFinish(page : number,countByPage : number) : Observable<Page<ProductionItem>>{
    return  this.client.get<Page<ProductionItem>>("http://localhost:8080/production/allfinish?page=" + page + "&countByPage="+ countByPage)

  }

  getAllProductionTemplate(page :number,countByPage : number) : Observable<Page<ProductionTemplate>>{
    return this.client.get<Page<ProductionTemplate>>("http://localhost:8080/production/all?page="+ page +"&countByPage=" + countByPage)
  }

  getAllProductionFailed(page : number, countByPage : number) : Observable<Page<ProductionItem>>{
    return  this.client.get<Page<ProductionItem>>("http://localhost:8080/production/allfailed?page=" + page + "&countByPage="+ countByPage)
  }

}


