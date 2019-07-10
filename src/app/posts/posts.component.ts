import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { PostService } from './../services/post.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;

  constructor(private service: PostService) {

   }

  ngOnInit() {
    this.service.getAll()
      .subscribe(posts => this.posts = posts);
  }

  createPost(input: HTMLInputElement) {
    const post = { title : input.value};
    this.posts.unshift(post);

    input.value = '';

    this.service.create(post)
      .subscribe(response => {
        post['id'] = response['id'];
      },
      (error: Response) => {
        this.posts.shift();

        if (error instanceof BadInput) {
          // this.form.setErrors(error.originalError);
        } else {
          throw error;
        }
      });
  }

  updatePost(post) {
    this.service.update(post.id)
      .subscribe(posts => console.log(posts));

  }

  deletePost(post) {
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post)
      .subscribe(
        null,
      (error: Response) => {
        this.posts.splice(index, 0, post);

        if (error instanceof NotFoundError) {
          alert('This post has already been deleted.');
        } else {
          throw error;
        }
      });
  }

}
