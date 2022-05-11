import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Document} from "../models/document";
import {CreateDocument} from "../models/create-document";

@Injectable({
  providedIn: 'root'
})

export class DocumentApiService {
  private readonly _apiUrl = environment.orderServiceApiUrl;

  constructor(
    private readonly _httpClient: HttpClient
  ) {
  }

  public getDocuments(): Observable<Document[]> {
    return this._httpClient.get<Document[]>(`${this._apiUrl}/api/crud/document/`)
  }

  public create(createDocument: CreateDocument): Observable<any> {
    return this._httpClient.post<any>(`${this._apiUrl}/api/crud/document/create`, createDocument);
  }
}
