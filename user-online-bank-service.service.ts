import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserOnlineBank } from './useronline-bank';
import { BillPayment } from './billpayment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserOnlineBankServiceService {

   private baseUrl = 'http://localhost:8080/api/users';
  // getAllUsers: any;

  constructor(private http: HttpClient) { }

  registerUser(user: UserOnlineBank): Observable<UserOnlineBank> {
    return this.http.post<UserOnlineBank>(`${this.baseUrl}/register`, user);
  }

  getUserByUsername(username: string): Observable<UserOnlineBank> {
    return this.http.get<UserOnlineBank>(`${this.baseUrl}/${username}`);
  }

  getAllBillPaymentss(): Observable<BillPayment[]> {
    return this.http.get<BillPayment[]>(`${this.baseUrl}/all`);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/all`);
  }
  


updateUser(user: User): Observable<User> {
  return this.http.put<User>(`${this.baseUrl}/update`, user);
}

deleteUser(userId: number): Observable<void> {
  return this.http.delete<void>(`${this.baseUrl}/delete/${userId}`);
}


}
