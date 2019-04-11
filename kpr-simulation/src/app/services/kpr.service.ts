import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { MessageService } from '../services/message.service';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Res } from '../result-kpr';
import { Kpr } from '../kpr';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json',
    // 'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class KprService {

  private resUrl = 'api/res'; // URL to web api
  private kprUrl = 'api/kpr';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }


  private log(message: string) {
    this.messageService.add('KprService: ${message}');
  }

  // Pushing data to backend for further processing

  addKpr(kpr: Kpr): Observable<Kpr> {
    return this.http.post<Kpr>(this.kprUrl, kpr, httpOptions).pipe(
      tap((newKpr: Kpr) => this.log(`added Kpr parameter with id=${newKpr.id}`)),
      catchError(this.handleError<Kpr>('addKpr', kpr))
    );
  }

  // Pulling the calculation result of the KPR

  getRes(): Observable<Res[]> {
    return this.http.get<Res[]>(this.resUrl).pipe(tap(_ => this.log('fetched result')),
      catchError(this.handleError<Res[]>('getRes', []))
    );
  }

  getOneRes(id: number): Observable<Res> {
    const url = `${this.resUrl}/${id}`;
    return this.http.get<Res>(url).pipe(
      tap(_ => this.log(`fetched result id=${id}`)),
      catchError(this.handleError<Res>(`getOneRes id=${id}`))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
