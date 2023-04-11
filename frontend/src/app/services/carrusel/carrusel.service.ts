import { ElementRef, Injectable, ViewChild } from '@angular/core';
import Swiper from 'swiper';

@Injectable({
  providedIn: 'root'
})
export class CarruselService {

  swiper: any;
  @ViewChild('nextBtn') siguiente!: ElementRef;
  @ViewChild('prevBtn') anterior!: ElementRef;

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
      navigation: {
        nextEl: this.siguiente?.nativeElement,
        prevEl: this.anterior?.nativeElement,
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
    }, 5000);

    this.siguiente?.nativeElement.addEventListener('click', (event: { preventDefault: () => void; }) => {
      event.preventDefault();
      this.swiper.slideNext();
    });

    this.anterior?.nativeElement.addEventListener('click', (event: { preventDefault: () => void; }) => {
      event.preventDefault();
      this.swiper.slidePrev();
    });
  }
}
