import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CarruselService } from 'src/app/services/carrusel/carrusel.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss']
})
export class CarruselComponent implements OnInit {

  destacados:any;
  i :number =4;
  env = environment;

  loaded:boolean = false;
  


  constructor(private carrusel : CarruselService,private http:HttpClient) { }

    ngOnInit(): void {

      //INICAR EL CARRUSEL DESDE EL SERVICIO
      this.carrusel.iniciar();

      //PETICION GET PARA OBTENER LOS VIAJES DESTACADOS
      this.http.get(`${this.env.BACKEND_VIAJES_URL}/destacado/GetJson`).subscribe((data: any) => {
        this.destacados = data.map((viaje: any) => {

          return viaje;

        });
        
        this.loaded = true;
      });

    }
    

  }

  


