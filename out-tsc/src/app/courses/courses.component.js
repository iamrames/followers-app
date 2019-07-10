import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CoursesService } from '../services/courses.service';
let CoursesComponent = class CoursesComponent {
    constructor(service) {
        this.title = "3 Courses";
        this.colSpan = 2;
        this.email = 'me@example.com';
        this.course = {
            title: "The Complete Angular Course",
            rating: 4.9745,
            students: 30123,
            price: 190.95,
            releaseDate: new Date(2019, 7, 2)
        };
        this.text = "My name is Ramesh Shah. I am from Nepal. I am a dot net developer. I love coding.";
        this.courses = service.getCourses();
    }
    ngOnInit() {
    }
    onSave($event) {
        $event.stopPropagation(); //Stops bubbling the events
        console.log("Button was clicked!", $event);
    }
    onDivClick() {
        console.log("Div was clicked!");
    }
    onKeyUp() {
        console.log(this.email);
    }
};
CoursesComponent = tslib_1.__decorate([
    Component({
        selector: 'app-courses',
        templateUrl: './courses.component.html',
        styleUrls: ['./courses.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [CoursesService])
], CoursesComponent);
export { CoursesComponent };
//# sourceMappingURL=courses.component.js.map