import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentsListPageComponent } from './pages/documents-list-page/documents-list-page.component';
import { DocumentsListComponent } from './components/documents-list/documents-list.component';
import { CreateDocumentModalComponent } from './components/create-document-modal/create-document-modal.component';
import { CreateDocumentFormComponent } from './components/create-document-form/create-document-form.component';
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'

import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    DocumentsListPageComponent,
    DocumentsListComponent,
    CreateDocumentModalComponent,
    CreateDocumentFormComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    FontAwesomeModule,
    RouterModule,
    ReactiveFormsModule,
    RouterModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class DocumentsModule { }
