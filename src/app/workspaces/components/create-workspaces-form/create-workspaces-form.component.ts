import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Product} from "../../models/product";
import {OpsStatus} from "../../models/ops-status";
import {Tariff} from "../../models/tariff";
import {Subject, Subscription} from "rxjs";
import {CreateWorkspace} from "../../models/create-workspace";
import {TariffVariant} from "../../models/tariff-variant";
import {Bill} from "../../../bills/models/bill";

@Component({
  selector: 'app-create-workspaces-form',
  templateUrl: './create-workspaces-form.component.html',
  styleUrls: ['./create-workspaces-form.component.css']
})

export class CreateWorkspacesFormComponent implements OnInit {
  @Input() public products: Product[] = []
  @Input() public clients: string[] = [];
  @Input() public orders: Bill[] = [];
  @Input() public submitForm: Subject<any> = new Subject<any>();

  @Output() public createWorkspaceFormSubmitted: EventEmitter<CreateWorkspace> = new EventEmitter<CreateWorkspace>();

  public statuses: string[] = [];
  public tariffs: Tariff[] = [];
  public tariffVariants: TariffVariant[] = [];

  public createWorkspaceForm: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    user_id: new FormControl(null, Validators.required),
    order_id: new FormControl(null, Validators.required),
    product_id: new FormControl(null, Validators.required),
    tariff_id: new FormControl(null, Validators.required),
    tariff_variant_id: new FormControl(null, Validators.required),
    licenses_count: new FormControl(null,
      [Validators.required, Validators.pattern("^[0-9]*[1-9][0-9]*$")])
  });
  private _subscription: Subscription = new Subscription();

  constructor() {
  }

  ngOnInit(): void {
    this.statuses = [
      OpsStatus.OPS_STATUS_ACTIVE,
      OpsStatus.OPS_STATUS_SUSPENDED,
      OpsStatus.OPS_STATUS_SETTING_UP,
      OpsStatus.OPS_STATUS_FAIL
    ];

    const formSubmitSubscription = this.submitForm.subscribe(() => {
      this.submitCreateProductMovementForm();
    });
    this._subscription.add(formSubmitSubscription);

    this.updateTariff();
    this.updateTariffVariant();
  }

  public updateTariff(): void {
    this.createWorkspaceForm.controls['product_id'].valueChanges.subscribe(() => {
      const productId = this.createWorkspaceForm.controls['product_id'].value;
      if (productId === null || productId === undefined) {
        this.tariffs = [];
      } else {
        const product = this.products.find(x => x.id === productId ) as Product;
        this.tariffs = product === null ? [] : product.tariffs;
      }

      this.createWorkspaceForm.controls['tariff_id'].reset();
    });
  }

  public updateTariffVariant(): void {
    this.createWorkspaceForm.controls['tariff_id'].valueChanges.subscribe(() => {
      this.createWorkspaceForm.controls['tariff_variant_id'].reset();

      const tariffId = this.createWorkspaceForm.controls['tariff_id'].value;
      if  (tariffId === null || tariffId === undefined) {
        this.tariffVariants = [];
        return;
      }

      const tariff = this.tariffs.find(x => x.id === tariffId) as Tariff;
      this.tariffVariants = tariff === null ? [] : tariff.tariff_variants;
    });
  }

  private submitCreateProductMovementForm(): void {
    this.createWorkspaceForm.markAllAsTouched();
    if (this.createWorkspaceForm.invalid) {
      return;
    }

    const formValue: CreateWorkspace = this.createWorkspaceForm.getRawValue();
    console.log(formValue);
    this.createWorkspaceFormSubmitted.emit(formValue);
    this.createWorkspaceForm.reset();
  }
}
