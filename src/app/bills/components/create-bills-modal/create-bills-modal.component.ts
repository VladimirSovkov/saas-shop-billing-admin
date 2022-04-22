import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CreateBill} from "../../models/create-bill";
import {Subject} from "rxjs";
import {Workspace} from "../../../workspaces/models/workspace";
import {Product} from "../../models/product";

@Component({
  selector: 'app-create-bills-modal',
  templateUrl: './create-bills-modal.component.html',
  styleUrls: ['./create-bills-modal.component.css']
})
export class CreateBillsModalComponent implements OnInit {

  @Output() public createBill = new EventEmitter<CreateBill>();

  public submitForm: Subject<any> = new Subject<any>();

  constructor(
    public dialogRef: MatDialogRef<CreateBillsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      clients: string[],
      workspaces: Workspace[],
      products: Product[]
    }
  ) { }

  public ngOnInit(): void {
  }

  public onCreateBillFormSubmitted(formValue: CreateBill): void {
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
