import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tariff } from '../tariff/tariff.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class BillModule { }

export class Bill {
  client: string='';
  workspace: string='';
  tariff: Tariff = new Tariff();
  licenses_count:number=0;
  
}
