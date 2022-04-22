import {TariffVariant} from "./tariff-variant";

export class Tariff {
  // @ts-ignore
  public id: number;
  // @ts-ignore
  public product_id: number;
  // @ts-ignore
  public name: string;
  // @ts-ignore
  public order: string;
  // @ts-ignore
  public description: string;
  // @ts-ignore
  public maximum_licenses_count: number;
  // @ts-ignore
  public tariff_variants: TariffVariant[];
}
