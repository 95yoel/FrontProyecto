import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-contenido-destino',
  templateUrl: './contenido-destino.component.html',
  styleUrls: ['./contenido-destino.component.scss']
})
export class ContenidoDestinoComponent implements OnInit {


  contenido:any;
  loaded:boolean = false;
  env = environment;

  params :{ id: number; titulo:string } | undefined;
  textoMostrar:string ="";
  tituloCategoria:string ="";
  estaVacio:boolean = false;

  constructor(private rutaActiva: ActivatedRoute,private http:HttpClient) { }

  ngOnInit(): void {

    this.params = {
      id: this.rutaActiva.snapshot.params['parametro'],
      titulo : this.rutaActiva.snapshot.params['titulo']
    }

    this.rutaActiva.params.subscribe((params: Params) => {
      this.params = {
        id: params['parametro'],
        titulo : params['titulo']
      }
    });

    this.tituloCategoria = this.params.titulo.toString();
    this.textoMostrar = this.params.id.toString();
    console.log(this.params.id);

    this.http.get(`${this.env.BACKEND_VIAJES_URL}/Viajes/ObtenerViajesPorDestino/${this.params.id}`).subscribe((data: any) => {
      this.contenido = data.map((viaje: any) => {
        viaje.precio = Math.round(viaje.precio * 100) / 100;
        viaje.precio = viaje.precio.toString().replace('.', ',');
        return viaje;

      });
      
      console.log(this.contenido);
      this.estaVacio = this.contenido.length == 0 ? true : false;
      this.loaded = true;
    });


  }
  atras(){
    window.history.back();
  }

}
