import {NgModule} from "@angular/core";
import {CreateWorkspacesModalComponent} from "./components/create-workspaces-modal/create-workspaces-modal.component";
import {CreateWorkspacesFormComponent} from "./components/create-workspaces-form/create-workspaces-form.component";
import {WorkspacesListComponent} from "./components/workspaces-list/workspaces-list.component";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {RouterModule} from "@angular/router";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import { WorkspacesListPageComponent } from './pages/workspaces-list-page/workspaces-list-page.component';
import {CommonModule} from "@angular/common";
import {WorkspaceApiService} from "./services/workspace-api-service";
import {ProductApiService} from "./services/product-api-service";

@NgModule({
  declarations: [
    WorkspacesListPageComponent,
    CreateWorkspacesModalComponent,
    CreateWorkspacesFormComponent,
    WorkspacesListComponent,
    WorkspacesListPageComponent,
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
    WorkspaceApiService,
    ProductApiService
  ],
  bootstrap: [

  ]
})
export class WorkspacesModule{}
