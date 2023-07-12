import { Component,OnInit,Input} from '@angular/core';
import { gsap } from 'gsap';
import { Injectable, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-layout-cabecera',
  templateUrl: './layout-cabecera.component.html',
  styleUrls: ['./layout-cabecera.component.scss']
})
export class LayoutCabeceraComponent implements OnInit {


  @Input() loggedIn: boolean | undefined;

  showLoginPopup: boolean = false;
  showRegisterPopup: boolean = false;
  usuario:any;
  EstaConectado:boolean=false;
  
  constructor() { }

  ngOnInit(): void { 
    //manejar el estado de la sesion
    const userDataString = sessionStorage.getItem('usuario');
    if (userDataString) {
      this.usuario = JSON.parse(userDataString);
      this.EstaConectado=true;
      console.log(this.usuario); 
    }else{
      this.EstaConectado=false;
    }

  }
  //Cerrar sesion
  desconectar(){
    sessionStorage.removeItem('usuario');
    this.EstaConectado = false;
    console.log("desconectado");
  }

  //ABRIR POPUP LOGIN
  openLoginPopup() {
    this.showLoginPopup = true;
    
    //animacion gsap para el popup
    const tl = gsap.timeline();
  
    tl.fromTo(".overlay", { opacity: 0 }, { opacity: 0.5, duration: 2 }, 0);
    tl.to(".popup-container", { opacity: 1, duration: 0.2 }, 0);
    if(this.showRegisterPopup){
      this.closeRegisterPopup();
    }
  }
  //abrir popup registro
  openRegisterPopup() {
    this.showRegisterPopup = true;

    //animacion gsap para el popup
    const tl = gsap.timeline();
  
    tl.fromTo(".overlay", { opacity: 0 }, { opacity: 0.5, duration: 2 }, 0);
    tl.to(".popup-container", { opacity: 1, duration: 0.2 }, 0);
    if(this.showLoginPopup){
      this.closeLoginPopup();
    }
  }
  //cerrar popup login
  closeLoginPopup() {

    //animacion gsap para el popup
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

    //animacion gsap para el popup
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
