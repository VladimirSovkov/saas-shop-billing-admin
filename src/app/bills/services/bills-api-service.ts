import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {CreateBill} from "../models/create-bill";
import {Bill} from "../models/bill";
import {Workspace} from "../../workspaces/models/workspace";

@Injectable({
  providedIn: 'root'
})
export class BillsApiService {
  private readonly _apiUrl = environment.orderServiceApiUrl;

  constructor(
    private readonly _httpClient: HttpClient
  ) {
  }

  public getBills(): Observable<Bill[]> {
    return this._httpClient.get<Bill[]>(`${this._apiUrl}/api/crud/order`)
  }

  public create(createBill: CreateBill): Observable<any> {
    return this._httpClient.post<any>(`${this._apiUrl}/api/crud/order/create/`, createBill);
  }

  public getWorkspaces(): Observable<Workspace[]> {
    return this._httpClient.get<Workspace[]>(`${this._apiUrl}/api/crud/workspace`);
  }
}
