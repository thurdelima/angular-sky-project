import { Component, OnInit, AfterViewInit } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-list-dc-movies',
  templateUrl: './list-dc-movies.component.html',
  styleUrls: ['./list-dc-movies.component.css']
})
export class ListDcMoviesComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(){
    $('.dcMovies .owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      dots: false,
      items: 1,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:3,
              nav:false
          },
          1000:{
              items:5,
              nav:true,
              loop:false
          }
      }
    })
  }

}
