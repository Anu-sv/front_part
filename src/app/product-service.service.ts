import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  getProductById(id: number) {
    throw new Error("Method not implemented.");
  }
  private baseUrl="http://localhost:8082/site/product";
  private urlgetp="http://localhost:8082/site/product/data";
  private urlgetc="http://localhost:8082/site/product/delete";

  constructor(private httpClient:HttpClient) { }

  getAllProductList(): Observable<Product[]>{
    console.log("hello")
    return this.httpClient.get<Product[]>(`${this.urlgetp}`);
  }
  createProduct(product:Product,vendorid:number): Observable<any>{
    console.log("hello")
    return this.httpClient.post(`http://localhost:8082/site/product/post/${vendorid}`,product);
  }
  deleteProduct(id:number):Observable<any>{
    return this.httpClient.delete(`${this.urlgetc}/${id}`);
  }

  updateProduct(id:number,product:Product):Observable<any>{
    return this.httpClient.put(`${this.baseUrl}/${id}`,product);
  }

  getAllById(id:number):Observable<any>{
    return   this.httpClient.get<any>(`${this.baseUrl}/${id}`);
  }
}
