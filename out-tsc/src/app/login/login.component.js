import * as tslib_1 from "tslib";
import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidators } from '../signup-form/username.validators';
import { Router, ActivatedRoute } from '@angular/router';
let LoginComponent = class LoginComponent {
    constructor(router, route, authService) {
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.form = new FormGroup({
            account: new FormGroup({
                username: new FormControl("", [
                    Validators.required,
                    UsernameValidators.cannotContainSpace
                ]),
                password: new FormControl('', Validators.required)
            }),
        });
    }
    ngOnInit() {
    }
    get username() {
        return this.form.get('account.username');
    }
    get password() {
        return this.form.get('account.password');
    }
    signIn(credentials) {
        this.authService.login(credentials)
            .subscribe(result => {
            if (result) {
                let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
                this.router.navigate([returnUrl || '/']);
            }
            else
                this.invalidLogin = true;
        });
    }
};
LoginComponent = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [Router,
        ActivatedRoute,
        AuthService])
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map