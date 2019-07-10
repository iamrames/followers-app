import * as tslib_1 from "tslib";
import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
let NavbarComponent = class NavbarComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
};
NavbarComponent = tslib_1.__decorate([
    Component({
        selector: 'navbar',
        templateUrl: './navbar.component.html',
        styleUrls: ['./navbar.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [AuthService])
], NavbarComponent);
export { NavbarComponent };
//# sourceMappingURL=navbar.component.js.map