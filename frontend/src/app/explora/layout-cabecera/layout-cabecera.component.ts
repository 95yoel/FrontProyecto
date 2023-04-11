import { Component,OnInit} from '@angular/core';
import { gsap } from 'gsap';


@Component({
  selector: 'app-layout-cabecera',
  templateUrl: './layout-cabecera.component.html',
  styleUrls: ['./layout-cabecera.component.scss']
})
export class LayoutCabeceraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showLoginPopup: boolean = false;

  openLoginPopup() {
    this.showLoginPopup = true;
  
    const tl = gsap.timeline();
  
    tl.fromTo(".overlay", { opacity: 0 }, { opacity: 0.5, duration: 2 }, 0);
    tl.to(".popup-container", { opacity: 1, duration: 0.2 }, 0);
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
}
