import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {CreateWorkspace} from "../../models/create-workspace";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Subject} from "rxjs";
import {Product} from "../../models/product";

@Component({
  selector: 'app-create-workspaces-modal',
  templateUrl: './create-workspaces-modal.component.html',
  styleUrls: ['./create-workspaces-modal.component.css']
})
export class CreateWorkspacesModalComponent implements OnInit {
  @Output() public createBill = new EventEmitter<CreateWorkspace>();

  public createWorkspace = new CreateWorkspace();
  public submitForm: Subject<any> = new Subject<any>();

  constructor(
    public dialogRef: MatDialogRef<CreateWorkspacesModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      clients: string[],
      products: Product[]
    }

  ) { }

  public ngOnInit(): void {
  }

  public onCreateWorkspaceFormSubmitted(formValue: CreateWorkspace): void {
    this.createBill.emit(formValue);
    this.dialogRef.close(formValue);
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }

  public submit(): void {
    this.submitForm.next(null);
  }

}
