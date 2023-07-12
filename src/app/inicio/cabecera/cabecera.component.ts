import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showLoginPopup: boolean = false;
  showRegisterPopup: boolean = false;


  //ABRIR POPUP LOGIN
  openLoginPopup() {
    this.showLoginPopup = true;
  
    //ANIMACION GSAP PARA EL POPUP
    const tl = gsap.timeline();
  
    tl.fromTo(".overlay", { opacity: 0 }, { opacity: 0.5, duration: 2 }, 0);
    tl.to(".popup-container", { opacity: 1, duration: 0.2 }, 0);
    if(this.showRegisterPopup){
      this.closeRegisterPopup();
    }
  }

  //ABRIR POPUP REGISTRO
  openRegisterPopup() {
    this.showRegisterPopup = true;

    //ANIMACION GSAP PARA EL POPUP
    const tl = gsap.timeline();
  
    tl.fromTo(".overlay", { opacity: 0 }, { opacity: 0.5, duration: 2 }, 0);
    tl.to(".popup-container", { opacity: 1, duration: 0.2 }, 0);
    if(this.showLoginPopup){
      this.closeLoginPopup();
    }
  }
  
  //CERRAR POPUP
  closeLoginPopup() {
    const tl = gsap.timeline({
      duration: 0.2,
      onComplete: () => {
        this.showLoginPopup = false;
      }
    });

    tl.to('.popup-container', { opacity: 0, duration: 0.2 });
    tl.to('.popup', { y: '100%', duration: 0.3, ease: 'power2.inOut' }, 0);
    tl.to('.overlay', { opacity: 0, duration: 0.2 }, 0);
  }

  //CERRAR REGISTRO POPUP
  closeRegisterPopup() {
    const tl = gsap.timeline({
      duration: 0.2,
      onComplete: () => {
        this.showRegisterPopup = false;
      }
    });

    tl.to('.popup-container', { opacity: 0, duration: 0.2 });
    tl.to('.popup', { y: '100%', duration: 0.3, ease: 'power2.inOut' }, 0);
    tl.to('.overlay', { opacity: 0, duration: 0.2 }, 0);
  }
}
