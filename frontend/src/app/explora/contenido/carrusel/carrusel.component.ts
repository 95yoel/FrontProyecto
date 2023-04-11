import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CarruselService } from 'src/app/services/carrusel/carrusel.service';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss']
})
export class CarruselComponent implements OnInit {

  constructor(private carrusel : CarruselService) { }

    ngOnInit(): void {
      this.carrusel.iniciar();
    }
  }

  


