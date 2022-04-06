import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginuserService } from '../loginuser.service';

@Component({
  selector: 'app-vender-product-page',
  templateUrl: './vender-product-page.component.html',
  styleUrls: ['./vender-product-page.component.css']
})
export class VenderProductPageComponent implements OnInit {

  role!:string | null;
  constructor(private router: Router,private userservice:LoginuserService,private route: ActivatedRoute) { }


  ngOnInit(): void {
  }

  getVenderOptions(){
    this.role=this.route.snapshot.paramMap.get('role');
    alert(this.role);
    this.router.navigate(['vendor',this.role]);
  }

  getProductOptions(){
    this.role=this.route.snapshot.paramMap.get('role');
    //alert(this.role);
    this.router.navigate(['product',this.role]);
  }

}
