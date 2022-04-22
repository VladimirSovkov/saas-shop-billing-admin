import {Requisite} from "./requisite";
import {PaymentMethod} from "./payment-method";
import {PaymentStatus} from "./payment-status";

export class CreateBill {
  // @ts-ignore
    public user_id: string;
  // @ts-ignore
  public tariff_variant_id: number;
  // @ts-ignore
  public workspace_name: string;
  // @ts-ignore
  public licenses_count: string;
  // @ts-ignore
  public payment_method: PaymentMethod;
  // @ts-ignore
  public payment_status: PaymentStatus;
  // @ts-ignore
  public requisites: Requisite;
}
