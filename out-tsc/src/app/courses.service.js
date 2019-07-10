import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let CoursesService = class CoursesService {
    constructor() { }
    getCourses() {
        return ["course1", "course2", "course3"];
    }
};
CoursesService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], CoursesService);
export { CoursesService };
//# sourceMappingURL=courses.service.js.map