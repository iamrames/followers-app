import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
let GithubProfileComponent = class GithubProfileComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.route.paramMap
            .subscribe(params => {
            let id = +params.get('id');
            console.log(id);
        });
    }
    submit() {
        this.router.navigate(['/followers'], {
            queryParams: { page: 1, order: 'newest' }
        });
    }
};
GithubProfileComponent = tslib_1.__decorate([
    Component({
        selector: 'app-github-profile',
        templateUrl: './github-profile.component.html',
        styleUrls: ['./github-profile.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
        Router])
], GithubProfileComponent);
export { GithubProfileComponent };
//# sourceMappingURL=github-profile.component.js.map