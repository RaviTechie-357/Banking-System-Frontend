import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class MessageserviceService {

  private apiUrl = 'http://localhost:8080/api/messages';

  constructor(private http: HttpClient) {}

  
  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(this.apiUrl);
  }

  updateMessage(message: Message): Observable<Message> {
    return this.http.put<Message>(`${this.apiUrl}/${message.id}`, message);
  }

  createMessage(message: Message): Observable<Message> {
    return this.http.post<Message>(this.apiUrl, message);
  }

  // Method to send a message
  sendMessage(userMessage: { name: string; email: string; message: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, userMessage).pipe(
      tap((response: any) => console.log('Message sent:', response)),
      catchError(this.handleError('sendMessage'))
    );
  }

  // Method to handle errors
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  deleteMessage(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}
