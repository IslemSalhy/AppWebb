import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { environment } from 'src/environment';
const apiBaseUrl = environment.apiBaseUrl;
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServerUrl = `${apiBaseUrl}`;

  constructor(private http: HttpClient) { }
  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServerUrl}/admin/all`);
  }
  public addUser( user: User): Observable<User> {
    return this.http.post<User>(`${this.apiServerUrl}/admin/add`, user);
  }
  public updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiServerUrl}/admin/update`, user);
  }
  public deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/admin/delete/${userId}`);
  }
}
