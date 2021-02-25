import { Component } from '@angular/core';
import {Post} from "./post/post.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts: Post[] = [];

  onAddPost(post: Post) {
    this.posts.unshift(post);
  }

}
