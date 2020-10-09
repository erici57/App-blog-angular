import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post.model';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  postSeleccionado: Post = {
    name: '',
    description: ''
  };
  posts: Post[] = [];
  private url = 'http://localhost:3000/api';

  constructor( private http: HttpClient ) { }


  crearPost( post: Post ) {
    return this.http.post( `${this.url}/post`, post );
  }



  actualizarPost( post: Post ) {
    return this.http.put( `${this.url}/post/${post._id}`, post );
  }


  getPosts() {
    return this.http.get( `${this.url}/post`);
  }



  deletePost( _id: string ) {
    return this.http.delete( `${this.url}/post/${_id}`);
  }


}

