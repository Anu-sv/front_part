import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductServiceService } from '../product-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorServiceService } from '../vendor-service.service';
import { Vendor } from '../vendor';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  product:Product=new Product;
  id!:number;
  vendors!: Vendor[];
 
  constructor(private vendorService:VendorServiceService,private productService:ProductServiceService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    
    this.id=this.route.snapshot.params['id'];
    this.productService.getAllById(this.id).subscribe((data: any) =>
    {
      this.product=data;
      this.product.vendorID=this.product.vendor.id;
    })
    this.getAllVendor();
  }

  submitProductUpdateForm(){
    this.productService.updateProduct(this.id,this.product).subscribe((data: any) =>
    {
      this.product=data;
     
      this.router.navigate(['product','ADMIN']);
    })
    
  }

  private getAllVendor(){
    console.log("hii")
    this.vendorService.getAllVendorList().subscribe((data: Vendor[]) =>
      {this.vendors=data;
        console.log(this.vendors);
      })
  }
}
