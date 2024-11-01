import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponseUsers } from '../interfaces/api-response';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _http: HttpClient = inject(HttpClient)
  constructor(
  ) {
  }

  /**
   * get users from api
   * @param page number of page
   * @returns Observable<ApiResponseUsers>
   */
  public getUsers(page?: number): Observable<ApiResponseUsers> {
    return this._http.get<ApiResponseUsers>(
      `https://randomuser.me/api/?page=${page ? page : 3}&results=10&seed=abc`
    )
  }
  getUsersDocuments(): Observable<ApiResponseUsers> {
    return this._http.get<ApiResponseUsers>('https://randomuser.me/api/?format=csv')
  }
}
