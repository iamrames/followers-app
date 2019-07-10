import { TestBed } from '@angular/core/testing';
import { OrderService } from './order.service';
describe('OrderService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(OrderService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=order.service.spec.js.map