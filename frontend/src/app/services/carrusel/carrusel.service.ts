import { ElementRef, Injectable, ViewChild } from '@angular/core';
import Swiper from 'swiper';

@Injectable({
  providedIn: 'root'
})
export class CarruselService {

  swiper: any;
  

  constructor() { }

  iniciar() {
    this.swiper = new Swiper('.mySwiper', {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
      loop: true,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      keyboard: {
        enabled: true,
      },
      
      breakpoints: {
        100: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 8,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 8,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });

    setInterval(() => {
      this.swiper.slideNext();
    }, 3000);
    
  }

  siguiente() {
    this.swiper.slideNext();
  }
  
  
}
