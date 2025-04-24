// base.service.ts
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // This makes the service available application-wide
})
export class BaseService {
  // ✅ Angular 17 way: use inject() instead of constructor injection
  // constructor(private readonly _http: HttpClient) {}
  private readonly _http = inject(HttpClient);

  /**
   * Generic GET method to fetch data
   */
  get<T>(url: string, params?: HttpParams, headers?: HttpHeaders) {
    return this._http.get<T>(url, { params, headers });
  }

  /**
   * Generic POST method to add new data
   */
  post<T>(url: string, body: T, headers?: HttpHeaders) {
    return this._http.post<T>(url, body, { headers });
  }

  /**
   * Generic PUT method to update data
   */
  put<T>(url: string, body: T, headers?: HttpHeaders) {
    return this._http.put<T>(url, body, { headers });
  }

  /**
   * Generic DELETE method to remove data
   */
  delete<T>(url: string, params?: HttpParams, headers?: HttpHeaders) {
    return this._http.delete<T>(url, { params, headers });
  }
}
