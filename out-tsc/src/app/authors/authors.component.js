import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthorsService } from '../services/authors.service';
let AuthorsComponent = class AuthorsComponent {
    constructor(service) {
        this.title = "3 Authors";
        this.authors = service.getAuthors();
    }
    ngOnInit() {
    }
};
AuthorsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-authors',
        templateUrl: './authors.component.html',
        styleUrls: ['./authors.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [AuthorsService])
], AuthorsComponent);
export { AuthorsComponent };
//# sourceMappingURL=authors.component.js.map