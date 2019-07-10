import { BadInput } from './../common/bad-input';
import { AppError } from './../common/app-error';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/Operators';
import { NotFoundError } from '../common/not-found-error';
export class DataService {
    constructor(url, http) {
        this.url = url;
        this.http = http;
    }
    getAll() {
        return this.http.get(this.url)
            .pipe(catchError(this.handleError));
    }
    create(resource) {
        return this.http.post(this.url, JSON.stringify(resource))
            .pipe(catchError(this.handleError));
    }
    update(resource) {
        return this.http.patch(this.url + '/' + resource, JSON.stringify({ isRead: true }))
            .pipe(catchError(this.handleError));
    }
    delete(resource) {
        return this.http.delete(this.url + '/' + resource)
            .pipe(retry(1), catchError(this.handleError));
    }
    handleError(error) {
        if (error.status === 404)
            return throwError(new NotFoundError());
        if (error.status === 400)
            return throwError(new BadInput(error.json()));
        return throwError(new AppError(error));
    }
}
//# sourceMappingURL=data.service.js.map