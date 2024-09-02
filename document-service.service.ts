import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentServiceService {
  private apiUrl = 'http://localhost:8080/api/documents';

  constructor(private http: HttpClient) {}

  // Upload a document
  uploadDocument(document: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/upload`, document);
  }

  // Get all documents
  getAllDocuments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/all`);
  }

  // Update document status
  updateDocumentStatus(id: number, status: string): Observable<any> {
    const params = new HttpParams().set('id', id.toString()).set('status', status);
    return this.http.post(`${this.apiUrl}/updateStatus`, null, { params, responseType: 'text' });
  }

  // Delete a document
  deleteDocument(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`, { responseType: 'text' });
  }

  // Get documents by user ID
  getDocumentsByUserId(userId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/user/${userId}`);
  }

  // Get document statuses by user ID
  getDocumentStatusByUserId(userId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/user/${userId}/status`);
  }
}
