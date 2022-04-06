import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginuserService } from '../loginuser.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User=new User(); 
  role!:string;
  constructor(private router: Router,private userservice:LoginuserService) { }

  ngOnInit(): void {
  }
/*
  btnClick(pageName:string):void{
    //this.router.navigateByUrl('/user');
    this.router.navigate(['${pageName}']);
    
};*/
onSubmit(){
  this.router.navigate(['vendor']);
}

userLogin(){
  console.log(this.user.userId);
  console.log(this.user.password);
  //actual call
  /*this.userservice.loginUser(this.user).subscribe(data=>{
    alert("login done");
  },error=>alert("***********Login failed*******"))*/
  
  //dummy call
  this.role=this.userservice.loginUserdummy(this.user);
  this.router.navigate(['vp',this.role]);
  
}

}
