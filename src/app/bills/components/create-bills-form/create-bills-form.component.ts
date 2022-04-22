import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CreateBill} from "../../models/create-bill";
import {Subject, Subscription} from "rxjs";
import {PaymentMethod} from "../../models/payment-method";
import {PaymentStatus} from "../../models/payment-status";
import {Product} from "../../models/product";
import {Tariff} from "../../models/tariff";
import {TariffVariant} from "../../models/tariff-variant";
import {Workspace} from "../../../workspaces/models/workspace";

@Component({
  selector: 'app-create-bills-form',
  templateUrl: './create-bills-form.component.html',
  styleUrls: ['./create-bills-form.component.css']
})
export class CreateBillsFormComponent implements OnInit, OnDestroy {
  @Input() public clients: string[] = [];
  @Input() public workspaces: Workspace[] = [];
  @Input() public products: Product[] = [];
  @Input() public submitForm: Subject<any> = new Subject<any>();

  @Output() public createBillFormSubmitted: EventEmitter<CreateBill> = new EventEmitter<CreateBill>();
  public createBillForm: FormGroup = new FormGroup({
    user_id: new FormControl(null, Validators.required),
    product_id: new FormControl(null, Validators.required),
    tariff_id: new FormControl(null, Validators.required),
    tariff_variant_id: new FormControl(null, Validators.required),
    workspace_name: new FormControl(null, Validators.required),
    licenses_count: new FormControl(null,
      [Validators.required,
        Validators.pattern("^[0-9]*[1-9][0-9]*$")]),
    payment_method: new FormControl(null, Validators.required),
    payment_status: new FormControl(null, Validators.required),
    requisites: new FormGroup({
      organization_name: new FormControl(null, Validators.required),
      organization_address: new FormControl(null, Validators.required),
      ogrn: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]*$')]),
      inn: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]*$')]),
      kpp: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]*$')])
    })
  });
  public payment_methods: string[] = [];
  public payment_statuses: string[] = [];
  public tariffs: Tariff[] = [];
  public tariffVariants: TariffVariant[] = [];

  private _subscription: Subscription = new Subscription();

  constructor() {
  }

  public ngOnInit(): void {
    const formSubmitSubscription = this.submitForm.subscribe(() => {
      this.submitCreateProductMovementForm();
    });
    this._subscription.add(formSubmitSubscription);

    this.payment_methods = [
      PaymentMethod.bank_card
    ];

    this.payment_statuses = [
      PaymentStatus.not_paid,
      PaymentStatus.success,
      PaymentStatus.fail
    ]

    this.updateTariff();
    this.updateTariffVariant();
    //initForm
  }

  public ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  public updateTariff(): void {
    this.createBillForm.controls['product_id'].valueChanges.subscribe(() => {
      const productId = this.createBillForm.controls['product_id'].value;
      if (productId === null || productId === undefined) {
        this.tariffs = [];
      } else {
        const product = this.products.find(x => x.id === productId ) as Product;
        this.tariffs = product === null ? [] : product.tariffs;
      }

      this.createBillForm.controls['tariff_id'].reset();
    });
  }

  public updateTariffVariant(): void {
    this.createBillForm.controls['tariff_id'].valueChanges.subscribe(() => {
      this.createBillForm.controls['tariff_variant_id'].reset();

      const tariffId = this.createBillForm.controls['tariff_id'].value;
      if  (tariffId === null || tariffId === undefined) {
        this.tariffVariants = [];
        return;
      }

      const tariff = this.tariffs.find(x => x.id === tariffId) as Tariff;
      this.tariffVariants = tariff === null ? [] : tariff.tariff_variants;
    });
  }

  public canErrorOgrn(): boolean {
    return (this.createBillForm.get('requisites.ogrn') as FormControl).hasError('pattern');
  }

  public canErrorKpp(): boolean {
    return (this.createBillForm.get('requisites.kpp') as FormControl).hasError('pattern');
  }

  public canErrorInn(): boolean {
    return (this.createBillForm.get('requisites.inn') as FormControl).hasError('pattern');
  }

  private submitCreateProductMovementForm(): void {
    this.createBillForm.markAllAsTouched();
    if (this.createBillForm.invalid) {
      return;
    }

    const formValue: CreateBill = this.createBillForm.getRawValue();
    console.log(formValue);
    this.createBillFormSubmitted.emit(formValue);
    this.createBillForm.reset();
  }
}
