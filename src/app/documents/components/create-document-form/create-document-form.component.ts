import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateDocument } from '../../models/create-document';
import {DirectoryEnum} from "../../models/directory-enum";
import {DocumentStatus} from "../../models/document-status";
import {Subject, Subscription} from "rxjs";

@Component({
  selector: 'app-create-document-form',
  templateUrl: './create-document-form.component.html',
  styleUrls: ['./create-document-form.component.css']
})
export class CreateDocumentFormComponent implements OnInit {
  @Input() public submitForm: Subject<any> = new Subject<any>();
  @Output() public createDocumentFormSubmitted: EventEmitter<CreateDocument> = new EventEmitter<CreateDocument>();

  public createDocumentForm: FormGroup = new FormGroup({
    filename: new FormControl(null, Validators.required),
    status: new FormControl(null, Validators.required),
    directory: new FormControl(null, Validators.required)
  });

  public directoryEnum: string[] = [];
  public documentStatus: string[] = [];
  private _subscription: Subscription = new Subscription();

  constructor() { }

  public ngOnInit(): void {
    this.directoryEnum = [
      DirectoryEnum.act,
      DirectoryEnum.offer_invoice
    ];
    this.documentStatus = [
      DocumentStatus.waiting,
      DocumentStatus.signed
    ]

    const formSubmitSubscription = this.submitForm.subscribe(() => {
      this.submitCreateProductMovementForm();
    });
    this._subscription.add(formSubmitSubscription);

  }

  private submitCreateProductMovementForm(): void {
    this.createDocumentForm.markAllAsTouched();
    if (this.createDocumentForm.invalid) {
      return;
    }

    const formValue: CreateDocument = this.createDocumentForm.getRawValue();
    this.createDocumentFormSubmitted.emit(formValue);
    this.createDocumentForm.reset();
  }
}
