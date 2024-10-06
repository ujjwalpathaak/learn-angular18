import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IAPIResponse } from "../model/class/interface/response";

@Injectable({
  providedIn: "root",
})
export class MasterService {
  http = inject(HttpClient);
  getDesignations(): Observable<IAPIResponse> {
    return this.http.get<IAPIResponse>(
      "https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllDesignation"
    );
  }
}
