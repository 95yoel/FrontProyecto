import { Component, ElementRef, OnInit } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap';
import { EsferaService } from 'src/app/services/esfera/esfera.service';


@Component({
  selector: 'app-esfera',
  templateUrl: './esfera.component.html',
  styleUrls: ['./esfera.component.scss']
})
export class EsferaComponent implements OnInit {

  constructor(private elementRef: ElementRef ,private esfera : EsferaService) { }
  
  ngOnInit(): void {
    const canvas = document.querySelector('.webgl') as HTMLCanvasElement;
    this.esfera.iniciar(canvas);
  }
  
}
