  import {Injectable} from "@angular/core";
import { environment } from 'src/environments/environment';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
  private readonly _apiUrl = environment.productServiceApiUrl;

  constructor(
    private readonly _httpClient: HttpClient
  ) {
  }

  public getProducts(): Observable<Product[]> {
    return this._httpClient.get<Product[]>(`${this._apiUrl}/api/products`);
  }
}
