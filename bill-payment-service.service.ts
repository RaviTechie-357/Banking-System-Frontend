import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BillPayment } from './billpayment';

@Injectable({
  providedIn: 'root'
})
export class BillPaymentServiceService {

  private baseUrl = 'http://localhost:8080/api/billpayments';
  getBillPaymentById: any;
  deleteBillPayment: any;
  payBill: any;
  updateBill: any;

  constructor(private http: HttpClient) { }

  createBillPayment(billPayment: BillPayment): Observable<BillPayment> {
    return this.http.post<BillPayment>(`${this.baseUrl}/create`, billPayment);
  }

  getBillPaymentsByUserId(userId: number): Observable<BillPayment[]> {
    return this.http.get<BillPayment[]>(`${this.baseUrl}/user/${userId}`);
  }

  getAllBillPayments(): Observable<BillPayment[]> {
    return this.http.get<BillPayment[]>(`${this.baseUrl}/all`);
  }

  updateBillPayment(billPayment: BillPayment): Observable<BillPayment> {
    return this.http.put<BillPayment>(`${this.baseUrl}/update`, billPayment);
  }
  
  deleteBillPaymentt(billPaymentId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${billPaymentId}`);
  }

}
