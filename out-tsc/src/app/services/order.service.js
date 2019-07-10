import * as tslib_1 from "tslib";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
let OrderService = class OrderService {
    constructor(http) {
        this.http = http;
    }
    getOrders() {
        let token = localStorage.getItem('token');
        let headers = new HttpHeaders()
            .set('Authorization', 'Bearer' + token);
        return this.http.get('/api/orders', { headers: headers });
    }
};
OrderService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function OrderService_Factory() { return new OrderService(i0.ɵɵinject(i1.HttpClient)); }, token: OrderService, providedIn: "root" });
OrderService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], OrderService);
export { OrderService };
//# sourceMappingURL=order.service.js.map