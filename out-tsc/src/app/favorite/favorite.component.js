import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let FavoriteComponent = class FavoriteComponent {
    constructor() { }
    ngOnInit() {
    }
    onClick() {
        this.isFavorite = !this.isFavorite;
    }
};
tslib_1.__decorate([
    Input('isFavorite'),
    tslib_1.__metadata("design:type", Boolean)
], FavoriteComponent.prototype, "isFavorite", void 0);
FavoriteComponent = tslib_1.__decorate([
    Component({
        selector: 'favorite',
        templateUrl: './favorite.component.html',
        styleUrls: ['./favorite.component.css'],
    }),
    tslib_1.__metadata("design:paramtypes", [])
], FavoriteComponent);
export { FavoriteComponent };
//# sourceMappingURL=favorite.component.js.map