import * as tslib_1 from "tslib";
import { combineLatest } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from './../services/github-followers.service';
import { Component } from '@angular/core';
import { switchMap } from 'rxjs/operators';
let GithubFollowersComponent = class GithubFollowersComponent {
    constructor(service, route) {
        this.service = service;
        this.route = route;
    }
    ngOnInit() {
        combineLatest([
            this.route.paramMap,
            this.route.queryParamMap
        ])
            .pipe(switchMap(combined => {
            let id = combined[0].get('id');
            let page = combined[1].get('page');
            return this.service.getAll();
        }))
            .subscribe(followers => this.followers = followers);
    }
};
GithubFollowersComponent = tslib_1.__decorate([
    Component({
        selector: 'app-github-followers',
        templateUrl: './github-followers.component.html',
        styleUrls: ['./github-followers.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [GithubFollowersService,
        ActivatedRoute])
], GithubFollowersComponent);
export { GithubFollowersComponent };
//# sourceMappingURL=github-followers.component.js.map