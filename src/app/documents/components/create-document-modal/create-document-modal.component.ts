import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {CreateDocument} from '../../models/create-document';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialogTitle} from '@angular/material/dialog';
import {Subject} from "rxjs";

@Component({
  selector: 'app-create-document-modal',
  templateUrl: './create-document-modal.component.html',
  styleUrls: ['./create-document-modal.component.css']
})
export class CreateDocumentModalComponent implements OnInit {
  @Output() public createDocument = new EventEmitter<CreateDocument>();
  public submitForm: Subject<any> = new Subject<any>();

  constructor(public dialogRef: MatDialogRef<CreateDocumentModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {
              }) {
  }

  public ngOnInit(): void {
  }

  public onCreateBillFormSubmitted(formValue: CreateDocument): void {
    this.createDocument.emit(formValue);
    this.dialogRef.close(formValue);
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }

  public submit(): void {
    this.submitForm.next(null);
  }
}
