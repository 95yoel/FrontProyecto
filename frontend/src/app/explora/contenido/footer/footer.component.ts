import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  //FUNCION PARA HACER SCROLL SUAVE HACIA ARRIBA
  arriba() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
}
