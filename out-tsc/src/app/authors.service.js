import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let AuthorsService = class AuthorsService {
    constructor() { }
    getAuthors() {
        return ["author1", "author2", "author3"];
    }
};
AuthorsService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthorsService);
export { AuthorsService };
//# sourceMappingURL=authors.service.js.map