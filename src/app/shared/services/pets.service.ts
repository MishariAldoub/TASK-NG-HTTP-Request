import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Pet } from '../../../data/pets';
import { catchError } from 'rxjs/internal/operators/catchError';
import { throwError } from 'rxjs/internal/observable/throwError';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class PetsService extends BaseService {
  private getPetApi =
    'https://pets-react-query-backend.eapi.joincoded.com/pets';
  // constructor(private http: HttpClient) { }
  // get<T>(url: string, params?: HttpParams, headers?: HttpHeaders) {
  //   return this.getPetApi.get<T>(url, { params, headers });
  // }

  getPets(): Observable<Pet[]> {
    return this.get<Pet[]>(this.getPetApi).pipe(
      catchError((error) => {
        console.error('Error fetching posts:', error);
        return throwError(() => error);
      })
    );
  }

  addPost(post: Pet): Observable<Pet> {
    return this.post<Pet>(this.getPetApi, post).pipe(
      catchError((error) => {
        console.error('Error adding post:', error);
        return throwError(() => error);
      })
    );
  }
}
