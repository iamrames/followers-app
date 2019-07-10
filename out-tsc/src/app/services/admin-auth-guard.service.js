import * as tslib_1 from "tslib";
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./auth.service";
import * as i2 from "@angular/router";
let AdminAuthGuard = class AdminAuthGuard {
    constructor(authService, route) {
        this.authService = authService;
        this.route = route;
    }
    canActivate() {
        let user = this.authService.currentUser;
        if (user && user.admin)
            return true;
        this.route.navigate(['/no-access']);
        return false;
    }
};
AdminAuthGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AdminAuthGuard_Factory() { return new AdminAuthGuard(i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i2.Router)); }, token: AdminAuthGuard, providedIn: "root" });
AdminAuthGuard = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [AuthService,
        Router])
], AdminAuthGuard);
export { AdminAuthGuard };
//# sourceMappingURL=admin-auth-guard.service.js.map