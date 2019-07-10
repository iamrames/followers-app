import { TestBed } from '@angular/core/testing';
import { CoursesService } from './courses.service';
describe('CoursesService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(CoursesService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=courses.service.spec.js.map