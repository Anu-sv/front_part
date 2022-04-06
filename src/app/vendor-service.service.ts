import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendor } from './vendor';
@Injectable({
  providedIn: 'root'
})
export class VendorServiceService {
  private urlgetven="http://localhost:8082/site/vendor"
  private baseUrl="http://localhost:8082/site/vendor/data"
  private baseUrlPost="http://localhost:8082/site/vendor/v"
  private urlgetd="http://localhost:8082/site/vendor/delete"
  private urlupven="http://localhost:8082/site/vendor/put"
  constructor(private httpClient:HttpClient) { }

  getAllVendorList(): Observable<Vendor[]>{
    console.log("hello")
    return this.httpClient.get<Vendor[]>(`${this.baseUrl}`);
  }
  createVendor(vendor:Vendor):Observable<any>{
    return this.httpClient.post(`${this.baseUrlPost}`,vendor);
  }
  deleteVendor(id:number):Observable<any>{
    return this.httpClient.delete(`${this.urlgetd}/${id}`);
  }
  getVendorById(id:number):Observable<any>{
    return this.httpClient.get(`${this.urlgetven}/${id}`);
  }
  updateVendor(vendor:Vendor,id:number):Observable<any>{
    return this.httpClient.put(`${this.urlupven}/${id}`,vendor);
  }
}
