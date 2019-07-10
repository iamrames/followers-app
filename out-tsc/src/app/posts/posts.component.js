import * as tslib_1 from "tslib";
import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { PostService } from './../services/post.service';
import { Component } from '@angular/core';
let PostsComponent = class PostsComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        this.service.getAll()
            .subscribe(posts => this.posts = posts);
    }
    createPost(input) {
        let post = { title: input.value };
        this.posts.unshift(post);
        input.value = '';
        this.service.create(post)
            .subscribe(response => {
            post['id'] = response['id'];
        }, (error) => {
            this.posts.shift();
            if (error instanceof BadInput) {
                //this.form.setErrors(error.originalError);
            }
            else
                throw error;
        });
    }
    updatePost(post) {
        this.service.update(post.id)
            .subscribe(posts => console.log(posts));
    }
    deletePost(post) {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
        this.service.delete(post)
            .subscribe(null, (error) => {
            this.posts.splice(index, 0, post);
            if (error instanceof NotFoundError)
                alert('This post has already been deleted.');
            else
                throw error;
        });
    }
};
PostsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-posts',
        templateUrl: './posts.component.html',
        styleUrls: ['./posts.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [PostService])
], PostsComponent);
export { PostsComponent };
//# sourceMappingURL=posts.component.js.map