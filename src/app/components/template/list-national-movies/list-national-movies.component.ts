import { Component, OnInit, AfterViewInit } from '@angular/core';
import {MoviesService} from '../list-movies/movies.service';

declare let $: any;

@Component({
  selector: 'app-list-national-movies',
  templateUrl: './list-national-movies.component.html',
  styleUrls: ['./list-national-movies.component.css']
})
export class ListNationalMoviesComponent implements OnInit, AfterViewInit {

  mov: any[] = [];
  subject: string = '';  

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.getMovies();
  }

  ngAfterViewInit(){
    
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
