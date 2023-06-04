import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-cruceros',
  templateUrl: './cruceros.component.html',
  styleUrls: ['./cruceros.component.scss']
})
export class CrucerosComponent implements OnInit {

  env = environment;
  constructor(private http:HttpClient) { }
  destinos:any;
  loaded:boolean = false;
  ngOnInit(): void {

    this.http.get(`${this.env.BACKEND_VIAJES_URL}/Viajes/ObtenerDestinosPorTipoViaje/`).subscribe((data: any) => {
      this.destinos = data.map((viaje: any) => {

        viaje.precio = Math.round(viaje.precio * 100) / 100; //redondeo a 2 decimales
        viaje.precio = viaje.precio.toString().replace('.', ','); //cambio el punto por la coma
        return viaje;

      });
      
      this.loaded = true;
      
    });

  }

}
