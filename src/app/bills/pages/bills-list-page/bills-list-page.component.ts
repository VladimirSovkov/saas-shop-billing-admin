import {Component, OnInit} from '@angular/core';
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {MatDialog} from "@angular/material/dialog";
import {CreateBillsModalComponent} from "../../components/create-bills-modal/create-bills-modal.component";
import {BillsApiService} from "../../services/bills-api-service";
import {CreateBill} from "../../models/create-bill";
import {ProductApiService} from "../../services/product-api-service";
import {Workspace} from "../../../workspaces/models/workspace";
import {Product} from "../../models/product";
import {Bill} from "../../models/bill";
import {OpsStatus} from "../../../workspaces/models/ops-status";

@Component({
  selector: 'app-bills-list-page',
  templateUrl: './bills-list-page.component.html',
  styleUrls: ['./bills-list-page.component.css']
})

export class BillsListPageComponent implements OnInit {
  public clients: string[] = ['ООО «КристаллСтройИнвест»', 'Client1', 'Client2'];
  public workspaces: Workspace[] = [
    // {
    //   workspace_id: 1,
    //   order_id: 1,
    //   user_id: '3bbb8723-8228-4dbd-b2ff-604feedc4651',
    //   name: 'name22',
    //   tariff_variant_id: 1,
    //   licenses_count: 10,
    //   work_at: '',
    //   ops_status: OpsStatus.OPS_STATUS_FAIL,
    //   payment_notified: false,
    //   createdAt: '2022-04-17T20:55:39.492Z',
    //   updatedAt: '2022-04-17T20:55:39.492Z'
    // },
    // {
    //   workspace_id: 2,
    //   order_id: 2,
    //   user_id: '3bbb8723-8228-4dbd-b2ff-604feedc4651',
    //   name: 'name',
    //   tariff_variant_id: 2,
    //   licenses_count: 10,
    //   work_at: '',
    //   ops_status: OpsStatus.OPS_STATUS_FAIL,
    //   payment_notified: false,
    //   createdAt: '2022-04-17T20:55:39.492Z',
    //   updatedAt: '2022-04-17T20:55:39.492Z'
    // }

  ];
  public products: Product[] = [
    // {
    //   id: 39,
    //   name: 'Product1',
    //   createdAt: '2022-04-09T15:57:13.638Z',
    //   updateAt: '2022-04-09T15:57:13.638Z',
    //   tariffs: [
    //     {
    //       id: 25,
    //       product_id: 39,
    //       name: 'Tariff 0',
    //       order: 1,
    //       description: '123',
    //       maximum_licenses_count: 10,
    //       tariff_variants: [
    //         {
    //           id: 32,
    //           tariff_id: 25,
    //           ops_json: '',
    //           period: 30,
    //           discount: 0,
    //           display_name: '1 месяц',
    //           price: 200,
    //           total_price: 200
    //         },
    //         {
    //           id: 33,
    //           tariff_id: 25,
    //           ops_json: '',
    //           period: 30,
    //           discount: 0,
    //           display_name: '1 год',
    //           price: 200,
    //           total_price: 200
    //         }
    //       ]
    //     },
    //     {
    //       id: 26,
    //       product_id: 39,
    //       name: 'Tariff 1',
    //       order: 1,
    //       description: '123',
    //       maximum_licenses_count: 10,
    //       tariff_variants: [
    //         {
    //           id: 34,
    //           tariff_id: 26,
    //           ops_json: '',
    //           period: 30,
    //           discount: 0,
    //           display_name: '1 месяц',
    //           price: 200,
    //           total_price: 200
    //         },
    //         {
    //           id: 35,
    //           tariff_id: 26,
    //           ops_json: '',
    //           period: 30,
    //           discount: 0,
    //           display_name: '1 год',
    //           price: 200,
    //           total_price: 200
    //         }
    //       ]
    //     }
    //   ]
    // },
    // {
    //   id: 40,
    //   name: 'Product2',
    //   createdAt: '2022-04-09T15:57:13.638Z',
    //   updateAt: '2022-04-09T15:57:13.638Z',
    //   tariffs: [
    //     {
    //       id: 41,
    //       product_id: 40,
    //       name: 'Tariff 2',
    //       order: 1,
    //       description: '123',
    //       maximum_licenses_count: 10,
    //       tariff_variants: [
    //         {
    //           id: 50,
    //           tariff_id: 41,
    //           ops_json: '',
    //           period: 30,
    //           discount: 0,
    //           display_name: '1 месяц',
    //           price: 200,
    //           total_price: 200
    //         },
    //         {
    //           id: 51,
    //           tariff_id: 41,
    //           ops_json: '',
    //           period: 30,
    //           discount: 0,
    //           display_name: '1 год',
    //           price: 200,
    //           total_price: 200
    //         }
    //       ]
    //     },
    //     {
    //       id: 42,
    //       product_id: 40,
    //       name: 'Tariff 3',
    //       order: 1,
    //       description: '123',
    //       maximum_licenses_count: 10,
    //       tariff_variants: [
    //         {
    //           id: 53,
    //           tariff_id: 42,
    //           ops_json: '',
    //           period: 30,
    //           discount: 0,
    //           display_name: '2 месяц',
    //           price: 200,
    //           total_price: 200
    //         },
    //         {
    //           id: 54,
    //           tariff_id: 42,
    //           ops_json: '',
    //           period: 30,
    //           discount: 0,
    //           display_name: '2 год',
    //           price: 200,
    //           total_price: 200
    //         }
    //       ]
    //     }
    //   ]
    // }
  ];
  add = faPlus;
  public bills: Bill[] = [
    // {
    //   order_id: 1,
    //   user_id: '3bbb8723-8228-4dbd-b2ff-604feedc4651',
    //   external_order_id: null,
    //   card_binding_id: null,
    //   tariff_variant_id: 54,
    //   discount: '10.01',
    //   total_price: '1000.01',
    //   workspace_name: 'hhj',
    //   is_change_license_count: null,
    //   is_change_tariff: null,
    //   licenses_count: 10,
    //   licenses_count_delta: null,
    //   payment_method: '1',
    //   payment_status: 'success',
    //   need_change_workspace: null,
    //   requisites: null,
    //   act_document_id: null,
    //   offer_invoice_document_id: null,
    //   work_at: null,
    //   paid_at: null,
    //   createdAt: "2022-04-17T20:10:52.108Z",
    //   updatedAt: "2022-04-17T20:10:52.108Z"
    // }
  ];

  constructor(private readonly _billsApiService: BillsApiService,
              private readonly _productApiService: ProductApiService,
              public dialog: MatDialog) {
  }

  public ngOnInit(): void {
    this.loadBills();
    this.loadProducts();
    this.loadWorkspaces();
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(CreateBillsModalComponent, {
      data: {
        clients: this.clients,
        workspaces: this.workspaces,
        products: this.products
      },
    });

    dialogRef.afterClosed().subscribe((createBill: CreateBill) => {
      if (createBill === undefined) {
        return;
      }
      this.onCreateBill(createBill);
    });
  }

  private loadBills(): void {
    this._billsApiService.getBills().subscribe((bills: Bill[]) => {
      this.bills = bills;
    })
  }

  private loadWorkspaces(): void {
    this._billsApiService.getWorkspaces().subscribe((workspaces: Workspace[]) => {
      this.workspaces = workspaces;
    })
  }

  private loadProducts(): void {
    this._productApiService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
    });
  }

  private onCreateBill(bill: CreateBill): void {
    this._billsApiService.create(bill).subscribe(() => {
      this.loadBills();
    })
  }
}
