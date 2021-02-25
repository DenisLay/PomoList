import {Component, EventEmitter, Output} from '@angular/core';
import {Post} from "../post/post.component";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent {

  @Output() postEmitter: EventEmitter<Post> = new EventEmitter<Post>();
  title = '';
  text = '';

  onAddPost() {
    const post = {
      title: this.title,
      text: this.text
    }
    this.postEmitter.emit(post);
    this.title = '';
    this.text = '';
  }

}
