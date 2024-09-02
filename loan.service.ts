import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Loan } from './loan';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  private baseUrl = 'http://localhost:8080/api/loans'; // Adjust URL as needed

  constructor(private http: HttpClient) {}

  applyForLoan(loan: Loan): Observable<Loan> {
    return this.http.post<Loan>(`${this.baseUrl}/apply`, loan);
  }

  getLoansByUserId(userId: number): Observable<Loan[]> {
    return this.http.get<Loan[]>(`${this.baseUrl}/${userId}`);
  }

  getLoanDetails(loanId: number): Observable<Loan> {
    return this.http.get<Loan>(`${this.baseUrl}/${loanId}`);
  }

  approveLoan(loanId: number): Observable<Loan> {
    return this.http.post<Loan>(`${this.baseUrl}/approve/${loanId}`, {});
  }

  rejectLoan(loanId: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/reject/${loanId}`, {});
  }
  
}
