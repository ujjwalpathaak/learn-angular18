import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  http = inject(HttpClient);
  getDesignations() {
    this.http
      .get(
        'https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllDesignation'
      )
      .subscribe((response: any) => {
        return response.data;
      });
  }
}
