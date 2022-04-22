import { NgModule } from '@angular/core';
import { BillsListPageComponent } from './pages/bills-list-page/bills-list-page.component';
import { BillsListComponent } from './components/bills-list/bills-list.component';
import { CreateBillsModalComponent } from './components/create-bills-modal/create-bills-modal.component';
import { CreateBillsFormComponent } from './components/create-bills-form/create-bills-form.component';
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {CommonModule} from "@angular/common";
import {HttpClient, HttpHandler} from "@angular/common/http";
import {BillsApiService} from "./services/bills-api-service";
import {ProductApiService} from "./services/product-api-service";

@NgModule({
  declarations: [
    BillsListPageComponent,
    BillsListComponent,
    CreateBillsModalComponent,
    CreateBillsFormComponent
  ],
  exports: [
    BillsListComponent
  ],
  imports: [
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    RouterModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    FontAwesomeModule,
    CommonModule,
  ],
  providers: [
    BillsApiService,
    ProductApiService
  ]
})
export class BillsModule { }
