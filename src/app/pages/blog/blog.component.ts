import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/post.model';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {


  constructor( public postService: PostsService ) { }

  ngOnInit(): void {

    this.getPosts();

  }


  getPosts() {

    this.postService.getPosts().subscribe( (resp: any) => {
      console.log(resp);
      this.postService.posts = resp.posts;
      console.log('posts: ', this.postService.posts);
    });

  }


  eliminar(id: string) {
    this.postService.deletePost(id).subscribe( resp => {
      console.log(resp);
      this.getPosts();
    });

  }

  editarPost( post: Post ) {
    this.postService.postSeleccionado = post;
  }


}
