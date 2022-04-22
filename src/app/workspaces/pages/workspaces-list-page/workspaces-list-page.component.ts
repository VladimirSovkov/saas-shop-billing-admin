import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {WorkspaceApiService} from "../../services/workspace-api-service";
import {Workspace} from "../../models/workspace";
import {CreateWorkspace} from "../../models/create-workspace";
import {OpsStatus} from "../../models/ops-status";
import {
  CreateWorkspacesModalComponent
} from "../../components/create-workspaces-modal/create-workspaces-modal.component";
import {ProductApiService} from "../../services/product-api-service";
import {Product} from "../../models/product";

@Component({
  selector: 'app-workspaces-list-page',
  templateUrl: './workspaces-list-page.component.html',
  styleUrls: ['./workspaces-list-page.component.css']
})

export class WorkspacesListPageComponent implements OnInit {
  add = faPlus;
  public clients: string[] = ['ООО «КристаллСтройИнвест»', 'Client1', 'Client2'];
  public workspaces: Workspace[] = [
    // {
    //   workspace_id: 1,
    //   order_id: 1,
    //   user_id: "3bbb8723-8228-4dbd-b2ff-604feedc4651",
    //   name: "name22",
    //   tariff_variant_id: 1,
    //   licenses_count: 10,
    //   work_at: null,
    //   ops_status: OpsStatus.OPS_STATUS_ACTIVE,
    //   payment_notified: false,
    //   createdAt: "2022-04-17T20:55:39.492Z",
    //   updatedAt: "2022-04-17T20:55:39.492Z"
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

  constructor(
    private readonly _workspaceApiService: WorkspaceApiService,
    private readonly _productApiService: ProductApiService,
    private readonly _dialog: MatDialog) {
  }

  public ngOnInit(): void {
    this.loadWorkspace();
    this.loadProducts();
  }

  public openDialog(): void {
    const dialogRef = this._dialog.open(CreateWorkspacesModalComponent, {
      data: {
        clients: this.clients,
        workspaces: this.workspaces,
        products: this.products
      },
    });

    dialogRef.afterClosed().subscribe((createWorkspace: CreateWorkspace) => {
      if (createWorkspace === undefined) {
        return;
      }
      this.onCreateWorkspace(createWorkspace);
    });
  }

  public onCreateWorkspace(createWorkspace: CreateWorkspace): void {
    this._workspaceApiService.create(createWorkspace).subscribe(() => {
      this.loadWorkspace();
    });
  }

  private loadWorkspace(): void {
    this._workspaceApiService.getWorkspaces().subscribe((workspaces: Workspace[]) => {
      this.workspaces = workspaces;
    })
  }

  private loadProducts(): void {
    this._productApiService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
    })
  }
}
