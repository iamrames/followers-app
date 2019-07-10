import * as tslib_1 from "tslib";
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@angular/router";
let AuthService = class AuthService {
    constructor(http, route) {
        this.http = http;
        this.route = route;
    }
    login(credentials) {
        return this.http.post('/api/authenticate', JSON.stringify(credentials))
            .pipe(map(response => {
            if (response && response['token']) {
                localStorage.setItem('token', response['token']);
                return true;
            }
            return false;
        }));
    }
    logout() {
        localStorage.removeItem('token');
        this.route.navigate(['/']);
    }
    isLoggedIn() {
        let jwtHelper = new JwtHelperService();
        let token = localStorage.getItem('token');
        if (!token)
            return false;
        let isExpired = jwtHelper.isTokenExpired(token);
        return isExpired;
    }
    get currentUser() {
        let token = localStorage.getItem('token');
        if (!token)
            return null;
        return new JwtHelperService().decodeToken(token);
    }
};
AuthService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AuthService_Factory() { return new AuthService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.Router)); }, token: AuthService, providedIn: "root" });
AuthService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient,
        Router])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map