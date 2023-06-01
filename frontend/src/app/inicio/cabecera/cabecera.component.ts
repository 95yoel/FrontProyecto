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

  openLoginPopup() {
    this.showLoginPopup = true;
  
    const tl = gsap.timeline();
  
    tl.fromTo(".overlay", { opacity: 0 }, { opacity: 0.5, duration: 2 }, 0);
    tl.to(".popup-container", { opacity: 1, duration: 0.2 }, 0);
    if(this.showRegisterPopup){
      this.closeRegisterPopup();
    }
  }
  openRegisterPopup() {
    this.showRegisterPopup = true;
    const tl = gsap.timeline();
  
    tl.fromTo(".overlay", { opacity: 0 }, { opacity: 0.5, duration: 2 }, 0);
    tl.to(".popup-container", { opacity: 1, duration: 0.2 }, 0);
    if(this.showLoginPopup){
      this.closeLoginPopup();
    }
  }
  
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
