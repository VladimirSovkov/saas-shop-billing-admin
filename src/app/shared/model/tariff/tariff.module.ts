import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class TariffModule { }

export class Tariff
{
  name:string="";
  period:string="";
  discount:number=0;
  product_name:string="";
}
