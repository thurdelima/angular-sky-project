import { Component, OnInit, AfterViewInit } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(){
    $('.slidesGeneral .owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      autoWidth: true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }
    })
  }

}
