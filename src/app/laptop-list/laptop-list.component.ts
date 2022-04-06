import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorServiceService } from '../vendor-service.service';
import { Vendor } from '../vendor';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrls: ['./laptop-list.component.css']
})
export class LaptopListComponent implements OnInit {
  products: Product[]=[];
  vendors!: Vendor[];
  role!: string | null;
  showForm:boolean=false;
  forAd:boolean=false;
  product:Product=new Product();

  constructor(private productService:ProductServiceService,private vendorService:VendorServiceService,
    private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.role=this.route.snapshot.paramMap.get('role');
    //alert(this.role);
    if(this.role=="ADMIN"){
      this.forAd=true;
    }else if(this.role=="USER"){
      this.forAd=false;
    }
    this.getAllProduct();
    this.getAllVendor();
  }
  private getAllProduct(){
    console.log("hii")
    this.productService.getAllProductList().subscribe((data: Product[]) =>
      {this.products=data;
      console.log(data);
      })
  }
/*
  edit(id:number){
    this.productService.updateProduct(id,this.product).subscribe((data:Product[])=>{
      this.products=data;
      console.log(data);
    })
  }*/
  
  showLapTopForm(){
    this.showForm=true;
    
  }
  deleteProduct(id:number){
    this.productService.deleteProduct(id).subscribe((data: any)=>{
      console.log(data);
      this.getAllProduct();
    })

  }
  delete(id:number){
    console.log("inside delete",id);
    this.deleteProduct(id);
  }

  saveLaptop(){
    console.log("------------");
    console.log(this.product);
    console.log("------------");
    this.productService.createProduct(this.product,this.product.vendorID).subscribe((data:any)=>{
      console.log(data);
      this.getAllProduct();
    })
    
  }
  submitLapTopForm(){
    console.log(this.product);
    //this.products.push(this.product);
    this.saveLaptop();

  }
  private getAllVendor(){
    console.log("hii")
    this.vendorService.getAllVendorList().subscribe((data: Vendor[]) =>
      {this.vendors=data;
        console.log(this.vendors);
      })
  }

  edit(id:number){
    console.log("inside product edit",id);
    //this.deleteVendor(id);
    this.router.navigate(['updateP',id]);
  }

  showLapTopDetails(){
    console.log("inside search");
  }
}
