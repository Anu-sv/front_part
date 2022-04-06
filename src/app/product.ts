import { Vendor } from './vendor';

export class Product {
    id!: number;
    model_name!: string;
    os!: string;
    ram!: string;
    harddrive_size!: string;
    stack_available!: number;
    vendor!: Vendor;
    vendorID!:number;
   
}
