import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class LoginuserService {

  private baseurl="http://localhost:9090/user/login";
  constructor(private httpclient: HttpClient) { }
  role!: string;
  loginUser(user: User):Observable<object>{
    console.log("ïnside service");
    return this.httpclient.post(`${this.baseurl}`,user);
  }

  loginUserdummy(user:User):string{
    if(user.userId=='user'&&user.password=="user123"){
     this.role= "USER";
    }else if(user.userId=='admin'&&user.password=="admin123"){
      this.role= "ADMIN";
    }else{
      this.role="";
    }
    return this.role;
  }
}
