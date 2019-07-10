import * as tslib_1 from "tslib";
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
let NewCourseFormComponent = class NewCourseFormComponent {
    constructor(fb) {
        this.form = fb.group({
            name: ['', Validators.required],
            contact: fb.group({
                email: [],
                phone: []
            }),
            topics: fb.array([])
        });
    }
    addTopic(topic) {
        this.topics.push(new FormControl(topic.value));
        topic.value = '';
    }
    removeTopic(topic) {
        let index = this.topics.controls.indexOf(topic);
        this.topics.removeAt(index);
    }
    get topics() {
        return this.form.get('topics');
    }
};
NewCourseFormComponent = tslib_1.__decorate([
    Component({
        selector: 'app-new-course-form',
        templateUrl: './new-course-form.component.html',
        styleUrls: ['./new-course-form.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [FormBuilder])
], NewCourseFormComponent);
export { NewCourseFormComponent };
//# sourceMappingURL=new-course-form.component.js.map