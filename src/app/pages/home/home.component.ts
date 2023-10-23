import { Component, NgModule } from '@angular/core';
import { PostsService } from 'src/app/utils/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  isForYouActive: boolean = true;
  contents: any[] = [];

  constructor(private postService: PostsService) {
    this.contents = postService.getAllPost();
    console.log(this.contents[1].poll.answer);
  }

  vote(answerid: number, postid: number) {
    this.postService.votePost(postid, answerid);
  }

  changeContents(name: string) {}
}
