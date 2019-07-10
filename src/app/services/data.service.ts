import { BadInput } from './../common/bad-input';
import { AppError } from './../common/app-error';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/Operators';
import { NotFoundError } from '../common/not-found-error';

export class DataService {

  constructor(
      private url: string,
      private http: HttpClient
      ) { }

  getAll() {
    return this.http.get(this.url)
        .pipe(
            catchError(this.handleError)
        );
  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource))
      .pipe(
        catchError(this.handleError)
      );
  }

  update(resource) {
    return this.http.patch(this.url + '/' + resource, JSON.stringify({ isRead: true }))
      .pipe(
        catchError(this.handleError)
      );
  }

  delete(resource) {
    return this.http.delete(this.url + '/' + resource)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  private handleError(error: Response) {
    if (error.status === 404) {
      return throwError(new NotFoundError());
    }
    if (error.status === 400) {
      return throwError(new BadInput(error.json()));
    }
    return throwError(new AppError(error));
  }
}
