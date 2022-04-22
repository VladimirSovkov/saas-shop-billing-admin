import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTable} from "@angular/material/table";
import {Bill} from "../../models/bill";
import {Product} from "../../models/product";
import {Tariff} from "../../models/tariff";
import {TariffVariant} from "../../models/tariff-variant";

@Component({
  selector: 'app-bills-list',
  templateUrl: './bills-list.component.html',
  styleUrls: ['./bills-list.component.css']
})
export class BillsListComponent implements OnInit {
  @Input() public bills: Bill[] = [];
  @Input() public products: Product[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Bill>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['status', 'client', 'product', 'tariff', 'tariff_variant', 'license_count', 'discount', 'total_price'];

  constructor() {
  }

  public ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.table.dataSource = this.bills;
  }

  public getProductName(tariffVariantId: number): string {
    if (tariffVariantId === null || tariffVariantId === undefined) {
      return '-';
    }
    const product = this.products.find(x => x.tariffs.find(y => y.tariff_variants.find(z => z.id === tariffVariantId)));
    return product === undefined ? '-' : product.name;
  }

  public getTariffName(tariffVariantId: number): string {
    if (tariffVariantId === null || tariffVariantId === undefined) {
      return '-';
    }
    const tariffs = this.products.map(x => x.tariffs).flat() as Tariff[];
    const tariff = tariffs.find(x => x.tariff_variants.find(y => y.id === tariffVariantId))
    return tariff === undefined ? '-' : tariff.name;
  }

  public getTariffVariantName(tariffVariantId: number): string {
    if (tariffVariantId === null || tariffVariantId === undefined) {
      return '-';
    }
    const tariffs = this.products.map(x => x.tariffs).flat() as Tariff[];
    const tariffVariants = tariffs.map(x => x.tariff_variants).flat() as TariffVariant[];
    const tariffVariant = tariffVariants.find(x => x.id === tariffVariantId);
    return tariffVariant === undefined ? '-' : tariffVariant.display_name;
  }
}
