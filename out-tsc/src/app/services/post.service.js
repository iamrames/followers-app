import * as tslib_1 from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
let PostService = class PostService extends DataService {
    constructor(http) {
        super('http://jsonplaceholder.typicode.com/posts', http);
    }
};
PostService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function PostService_Factory() { return new PostService(i0.ɵɵinject(i1.HttpClient)); }, token: PostService, providedIn: "root" });
PostService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], PostService);
export { PostService };
//# sourceMappingURL=post.service.js.map