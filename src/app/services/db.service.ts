import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const endpoint = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private http: HttpClient) { }

  find(collection) {
    return this.http.get(endpoint + '/find/' + collection).pipe(
      catchError(this.handleError<any>('find'))
    );
  }

  findQuery(collection, id) {
    return this.http.get(endpoint + '/findQuery/' + collection + '/' + id).pipe(
      catchError(this.handleError<any>('findQuery'))
    );
  }

  findAll(collection) {
    return this.http.get(endpoint + '/findAll' + collection).pipe(
      catchError(this.handleError<any>('findAll'))
    );
  }

  post(collection, object) {
    return this.http.post(endpoint + '/insert/' + collection, object).pipe(
      catchError(this.handleError<any>('post'))
    );
  }

  update(collection, object) {
    return this.http.put(endpoint + '/put/' + collection + '/' + object._id, object).pipe(
      catchError(this.handleError<any>('update'))
    );
  }

  delete(collection, id) {
    return this.http.delete(endpoint + '/delete/' + collection + '/' + id).pipe(
      catchError(this.handleError<any>('delete'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      // console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // console.error(`${ operation } failed: ${ error.message }`);

      return of(error);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
