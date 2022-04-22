import {OpsStatus} from "./ops-status";

export class Workspace {
  // @ts-ignore
  public workspace_id: number;
  // @ts-ignore
  public order_id: number;
  // @ts-ignore
  public user_id: string;
  // @ts-ignore
  public name: string;
  // @ts-ignore
  public tariff_variant_id: number;
  // @ts-ignore
  public licenses_count: number;
  // @ts-ignore
  public work_at: string | null;
  // @ts-ignore
  public ops_status: OpsStatus | null;
  // @ts-ignore
  public payment_notified: boolean;
  // @ts-ignore
  public createdAt: string;
  // @ts-ignore
  public updatedAt: string;
}
