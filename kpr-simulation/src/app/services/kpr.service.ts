import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { MessageService } from '../services/message.service';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

// import { Res } from '../result-kpr';
import { Kpr, Res } from '../kpr';

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

  private kprUrl = 'api/ress'; // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }


  private log(message: string) {
    this.messageService.add(`KprService: ${message}`);
  }

  // Pushing data to backend for further processing

  addKpr(kpr): Observable<Kpr> {
    return this.http.post<Kpr>(this.kprUrl, kpr, httpOptions).pipe(
      tap(_ => this.log('added')),
      catchError(this.handleError<Kpr>('addKpr'))
    );
  }

  // Pulling the calculation result of the KPR

  // getRess(): Observable<Res[]> {
  //   return this.http.get<Res[]>(this.kprUrl)
  //     .pipe(tap(_ => this.log('fetched result')), catchError(this.handleError<Res[]>('getRess', [])));
  // }


  getRess(): Observable<Kpr[]> {
    return this.http.get<Kpr[]>(this.kprUrl)
      .pipe(tap(_ => this.log('fetched result')), catchError(this.handleError<Kpr[]>('getRess', [])));
  }

  // getKprs(): Observable<Kpr[]> {
  //   return this.http.get<Kpr[]>(this.kprUrl)
  //     .pipe(tap(_ => this.log('fetched result')), catchError(this.handleError<Kpr[]>('getKprs', [])));
  // }


  // getRes(): Observable<Res[]> {
  //   return this.http.get<Res[]>(this.kprUrl).pipe(tap(_ => this.log('fetched result')),
  //     catchError(this.handleError<Res[]>('getRes', []))
  //   );
  // }

  // getOneRes(id: number): Observable<Res> {
  //   const url = `${this.kprUrl}/${id}`;
  //   return this.http.get<Res>(url).pipe(
  //     tap(_ => this.log(`fetched result id=${id}`)),
  //     catchError(this.handleError<Res>(`getOneRes id=${id}`))
  //   );
  // }

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
