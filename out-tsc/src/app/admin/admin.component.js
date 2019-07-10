import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { OrderService } from '../services/order.service';
let AdminComponent = class AdminComponent {
    constructor(orderService) {
        this.orderService = orderService;
    }
    ngOnInit() {
        this.orderService.getOrders()
            .subscribe(orders => {
            this.orders = orders['body'];
        });
    }
};
AdminComponent = tslib_1.__decorate([
    Component({
        selector: 'app-admin',
        templateUrl: './admin.component.html',
        styleUrls: ['./admin.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [OrderService])
], AdminComponent);
export { AdminComponent };
//# sourceMappingURL=admin.component.js.map