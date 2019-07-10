import * as tslib_1 from "tslib";
import { UsernameValidators } from './username.validators';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
let SignupFormComponent = class SignupFormComponent {
    constructor() {
        this.form = new FormGroup({
            account: new FormGroup({
                username: new FormControl("", [
                    Validators.required,
                    Validators.minLength(3),
                    UsernameValidators.cannotContainSpace
                ], UsernameValidators.shouldBeUnique),
                password: new FormControl('', Validators.required)
            }),
        });
    }
    get username() {
        return this.form.get('account.username');
    }
    login() {
        this.form.setErrors({
            invalidLogin: true
        });
    }
};
SignupFormComponent = tslib_1.__decorate([
    Component({
        selector: 'signup-form',
        templateUrl: './signup-form.component.html',
        styleUrls: ['./signup-form.component.css']
    })
], SignupFormComponent);
export { SignupFormComponent };
//# sourceMappingURL=signup-form.component.js.map