import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {Workspace} from "../models/workspace";
import {CreateWorkspace} from "../models/create-workspace";

@Injectable({
  providedIn: 'root'
})
export class WorkspaceApiService {
  private readonly _apiUrl = 'http://testvm.plotpad.ru:4964'

  constructor(
    private readonly _httpClient: HttpClient
  ) {
  }

  public getWorkspaces(): Observable<Workspace[]> {
    return this._httpClient.get<Workspace[]>(`${this._apiUrl}/api/crud/workspace`)
  }

  public create(createWorkspace: CreateWorkspace): Observable<any> {
    return this._httpClient.post<any>(`${this._apiUrl}/api/crud/workspace/create`, createWorkspace);
  }
}
