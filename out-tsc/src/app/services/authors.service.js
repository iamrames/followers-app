import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
let AuthorsService = class AuthorsService {
    constructor() { }
    getAuthors() {
        return ["author1", "author2", "author3"];
    }
};
AuthorsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AuthorsService_Factory() { return new AuthorsService(); }, token: AuthorsService, providedIn: "root" });
AuthorsService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [])
], AuthorsService);
export { AuthorsService };
//# sourceMappingURL=authors.service.js.map