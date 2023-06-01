import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Pipe, PipeTransform } from '@angular/core';




@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.scss']
})
export class ContenidoComponent implements OnInit {

  destinos:any;
  destacados:any;
  i :number =4;
  env = environment;


  constructor(private http:HttpClient) { }


  //DE ESTA FORMA SE HACE LA PETICION AL BACKEND
  // ngOnInit(): void {

  //   this.http.get(`${this.env.BACKEND_VIAJES_URL}/Viajes/GetJson`).subscribe((data:any)=>{
  //     this.destinos = data;
  //   })
  // }
    ngOnInit(): void {
      this.http.get(`${this.env.BACKEND_VIAJES_URL}/Viajes/GetJson`).subscribe((data: any) => {
        this.destinos = data.map((viaje: any) => {
          viaje.precio = Math.round(viaje.precio * 100) / 100; //redondeo a 2 decimales
          viaje.precio = viaje.precio.toString().replace('.', ','); //cambio el punto por la coma
          return viaje;
        });
      });
      
    }
  
}
