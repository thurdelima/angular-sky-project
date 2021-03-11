import { Component, OnInit, AfterViewInit } from '@angular/core';
import {MoviesService} from '../list-movies/movies.service';

declare let $: any;

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit, AfterViewInit {

  mov: any[] = [];
  subject: string = '';  

  constructor(private moviesService: MoviesService) { }

  ngAfterViewInit() {

    
 
  }

  ngOnInit(){

  

    this.getMovies();

    

   
  }


   getMovies(): void {
     this.moviesService.read().subscribe((obj : any) => {

      this.subject = obj.title;

     for (let index = 0; index < obj.contents.length; index++) {
       this.mov.push(obj.contents[index]);
       
     }
      

      

     
    })
  }

}
