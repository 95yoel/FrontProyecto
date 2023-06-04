import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contenido-viaje',
  templateUrl: './contenido-viaje.component.html',
  styleUrls: ['./contenido-viaje.component.scss']
})
export class ContenidoViajeComponent implements OnInit {

  contenido:any;
  loaded:boolean = false;
  env = environment;

  params :{id: number;} | undefined;

  textoMostrar:string ="";
  tituloCategoria:string ="";
  idViaje:any;

  constructor(private rutaActiva: ActivatedRoute,private http:HttpClient) { }

  salir(){
    window.history.back();
  }


  ngOnInit(): void {

    this.params = {
      id: this.rutaActiva.snapshot.params['parametro']
    }
    this.rutaActiva.params.subscribe((params: Params) => {
      this.params = {
        id: params['parametro']
      }

      this.idViaje = this.params.id.toString();


      this.http.get(`${this.env.BACKEND_VIAJES_URL}/Viajes/GetViajeById/${this.idViaje}`).subscribe((data: any) => {
        if (Array.isArray(data)) {
          this.contenido = data.map((viaje: any) => {
            const fechaLlegada = new Date(viaje.fechaLlegada);
            const fechaSalida = new Date(viaje.fechaSalida);
            viaje.fechaLlegada = fechaLlegada.toLocaleString();
            viaje.fechaSalida = fechaSalida.toLocaleString();
            viaje.precio = Math.round(viaje.precio * 100) / 100; //redondeo a 2 decimales
            viaje.precio = viaje.precio.toString().replace('.', ','); //cambio el punto por la coma
            return viaje;
          });
      
          console.log(this.contenido);
          this.loaded = true;
        } else {
          console.log("No hay datos");
        }
        
      });




    });


  }

}
