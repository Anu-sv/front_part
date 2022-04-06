import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../vendor';
import { VendorServiceService } from '../vendor-service.service';


@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {
   
  vendors!: Vendor[];
  role!: string | null;
  showVenForm:boolean=false;
  showVenFormtoAdd:boolean=false;
  vendor:Vendor=new Vendor();
  constructor(private vendorService:VendorServiceService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.role=this.route.snapshot.paramMap.get('role');
    //alert(this.role);
    this.getAllVendor();
    if(this.role=='ADMIN'){
      this.showVenForm=true;

    }else{
      this.showVenForm=false;
    }
  }
  private getAllVendor(){
    console.log("hii")
    this.vendorService.getAllVendorList().subscribe((data: Vendor[]) =>
      {this.vendors=data;
      })
  }

  showLapTopForm(){
    //this.showVenForm=true;
    this.showVenFormtoAdd=true;
    
  }
  submitVendorForm(){
   // console.log(data);
    this.saveVendor();

  }

  saveVendor(){
    console.log("------------");
    console.log(this.vendor);
    console.log("------------");
    this.vendorService.createVendor(this.vendor).subscribe((data:any)=>{
      console.log(data);
      this.getAllVendor();
  });


}
deleteVendor(id:number){
  this.vendorService.deleteVendor(id).subscribe((data: any)=>{
    console.log(data);
    this.getAllVendor();
  })

}
delete(id:number){
  console.log("inside delete",id);
  this.deleteVendor(id);
}

edit(id:number){
  console.log("inside delete",id);
  //this.deleteVendor(id);
  this.router.navigate(['updateV',id]);
}

}