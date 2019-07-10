import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor() {
        this.viewMode = 'somethingElse';
    }
    onAdd() {
        this.courses.push({ id: 4, name: 'courses4' });
    }
    onRemove(course) {
        let index = this.courses.indexOf(course);
        this.courses.splice(index, 1);
    }
    onLoad() {
        this.courses = [
            { id: 1, name: 'course1' },
            { id: 2, name: 'course2' },
            { id: 3, name: 'course3' }
        ];
    }
    trackCourse(index, course) {
        return course ? course.id : undefined;
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map