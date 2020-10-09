import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {



  constructor( public postService: PostsService,
               private route: ActivatedRoute  ) { }


  ngOnInit(): void {
  }



  guardar(form: NgForm) {

    if ( form.invalid) {
      console.log('formulario no valido, se necesita un titulo');
      return;
    }


    if (form.value._id) {

      console.log(' METODO PUT - actualizando post');
      this.postService.actualizarPost(form.value).subscribe( resp => {
        console.log(resp);
        form.reset();
      });

    } else {

      console.log(' METODO POST - creando post');
      this.postService.crearPost(form.value).subscribe( resp => {
        console.log(resp);
        form.reset();
      });

    }

  }




}
