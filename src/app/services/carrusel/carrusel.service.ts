import { ElementRef, Injectable, ViewChild } from '@angular/core';
import Swiper from 'swiper';

@Injectable({
  providedIn: 'root'
})
export class CarruselService {

  swiper: any;
  
  constructor() { }

  //FUNCION PARA INICIAR EL CARRUSEL
  
  iniciar() {
    this.swiper = new Swiper('.mySwiper', {
      slidesPerView: 3, //imagenes por vista
      spaceBetween: 30, //espacio entre imagenes
      slidesPerGroup: 3, //imagenes por grupo
      loop: true, //bucle

      //CONFIGURACION DE BOTONES DE NAVEGACION

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      keyboard: {
        enabled: true,
      },

      //CONFIGURACION RESPONSIVE
      
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

    //Avazar el carrusel cada 3 segundos

    setInterval(() => {
      this.swiper.slideNext();
    }, 3000);
    
  }

  //avanzar carrusel
  siguiente() {
    this.swiper.slideNext();
  }
}
