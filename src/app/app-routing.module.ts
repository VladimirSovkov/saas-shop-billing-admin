import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WorkspacesListPageComponent} from "./workspaces/pages/workspaces-list-page/workspaces-list-page.component";
import {BillsListPageComponent} from "./bills/pages/bills-list-page/bills-list-page.component";
import {DocumentsListPageComponent} from "./documents/pages/documents-list-page/documents-list-page.component";

const routes: Routes = [
  { path: 'workspaces', component: WorkspacesListPageComponent},
  { path: 'bills', component: BillsListPageComponent},
  { path: 'docs', component: DocumentsListPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
