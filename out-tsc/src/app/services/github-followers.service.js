import * as tslib_1 from "tslib";
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
let GithubFollowersService = class GithubFollowersService extends DataService {
    constructor(http) {
        super('https://api.github.com/users/mosh-hamedani/followers', http);
    }
};
GithubFollowersService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function GithubFollowersService_Factory() { return new GithubFollowersService(i0.ɵɵinject(i1.HttpClient)); }, token: GithubFollowersService, providedIn: "root" });
GithubFollowersService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], GithubFollowersService);
export { GithubFollowersService };
//# sourceMappingURL=github-followers.service.js.map