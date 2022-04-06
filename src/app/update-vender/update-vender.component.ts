import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorServiceService } from '../vendor-service.service';

@Component({
  selector: 'app-update-vender',
  templateUrl: './update-vender.component.html',
  styleUrls: ['./update-vender.component.css']
})
export class UpdateVenderComponent implements OnInit {

  vendor:Vendor=new Vendor;
  id!:number;
  
  constructor(private vendorService:VendorServiceService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.vendorService.getVendorById(this.id).subscribe((data: any) =>
    {
      this.vendor=data;
    })
  }


  submitVendorUpdateForm(){
    this.vendorService.updateVendor(this.vendor,this.id).subscribe((data: any) =>
    {
      this.vendor=data;
      this.router.navigate(['vendor','ADMIN']);
    })
  }
}
