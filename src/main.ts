import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


if (environment.production) {
  enableProdMode();
}

declare let $: any;

setTimeout(function(){ 
  $('.movies .owl-carousel').owlCarousel({
    loop: false,
    rewind: true,
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

}, 2000);

setTimeout(() => {
  $('.nationalMovies .owl-carousel').owlCarousel({
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
}, 2000);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
