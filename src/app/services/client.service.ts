import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Client } from "../model/class/client";
import { environment } from "../../environments/environment.development";
import { Observable } from "rxjs";
import { IAPIResponse } from "../model/interface/response";

@Injectable({
  providedIn: "root",
})
export class ClientService {
  constructor(private http: HttpClient) {}
  deleteClient(id: number): Observable<IAPIResponse> {
    return this.http.delete<IAPIResponse>(
      environment.API_URL + "ClientStrive/DeleteClientByClientId?clientId=" + id
    );
  }
  addUpdate(client: Client): Observable<IAPIResponse> {
    return this.http.post<IAPIResponse>(
      environment.API_URL + "ClientStrive/AddUpdateClient",
      client
    );
  }
  getAllClients(): Observable<IAPIResponse> {
    return this.http.get<IAPIResponse>(
      environment.API_URL + "ClientStrive/GetAllClients"
    );
  }
}
