import { Component, ElementRef, OnInit } from '@angular/core';
import { EsferaService } from 'src/app/services/esfera/esfera.service';


@Component({
  selector: 'app-esfera',
  templateUrl: './esfera.component.html',
  styleUrls: ['./esfera.component.scss']
})
export class EsferaComponent implements OnInit {

  constructor(private elementRef: ElementRef ,private esfera : EsferaService) { }
  
  ngOnInit(): void {

    //DECLARAR EL ELEMENTO QUE CONTIENE LA ESFERA
    const canvas = document.querySelector('.webgl') as HTMLCanvasElement;

    // INICIAR LA ESFERA LLAMANDO AL SERVICIO
    this.esfera.iniciar(canvas);
  }
  
}
