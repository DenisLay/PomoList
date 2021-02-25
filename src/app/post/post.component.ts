import {Component, Input, OnInit} from '@angular/core';

export interface Post {
  id?: number,
  title: string,
  text: string
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  @Input() post: Post;

}
