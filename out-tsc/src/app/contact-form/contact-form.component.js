import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ContactFormComponent = class ContactFormComponent {
    constructor() {
        this.contactMethods = [
            { id: 1, name: 'Email' },
            { id: 2, name: 'Phone' },
        ];
    }
    submit(f) {
        console.log(f);
    }
};
ContactFormComponent = tslib_1.__decorate([
    Component({
        selector: 'app-contact-form',
        templateUrl: './contact-form.component.html',
        styleUrls: ['./contact-form.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], ContactFormComponent);
export { ContactFormComponent };
//# sourceMappingURL=contact-form.component.js.map