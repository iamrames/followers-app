import { HttpClient,HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient ) { }

  getOrders(){
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders()
      .set('Authorization','Bearer' + token);
    return this.http.get('/api/orders',{headers:headers});
  }
}
