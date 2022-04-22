import {Tariff} from "./tariff";

export class Product {
  // @ts-ignore
  public id: number;
  // @ts-ignore
  public name: string;
  // @ts-ignore
  public createdAt: string;
  // @ts-ignore
  public updateAt: string;
  // @ts-ignore
  public tariffs: Tariff[];
}
