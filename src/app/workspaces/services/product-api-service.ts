import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
  private readonly _apiUrl = 'http://testvm.plotpad.ru:3005'

  constructor(
    private readonly _httpClient: HttpClient
  ) {
  }

  public getProducts(): Observable<Product[]> {
    return this._httpClient.get<Product[]>(`${this._apiUrl}/api/products`);
  }
}
