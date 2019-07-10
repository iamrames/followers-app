import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
let CoursesService = class CoursesService {
    constructor() { }
    getCourses() {
        return ["course1", "course2", "course3"];
    }
};
CoursesService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CoursesService_Factory() { return new CoursesService(); }, token: CoursesService, providedIn: "root" });
CoursesService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [])
], CoursesService);
export { CoursesService };
//# sourceMappingURL=courses.service.js.map