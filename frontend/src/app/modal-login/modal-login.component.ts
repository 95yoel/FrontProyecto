import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../services/http/http.service';


@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})
export class ModalLoginComponent implements OnInit {

  @Output() closePopup = new EventEmitter();
  @Output() loginSuccess: EventEmitter<boolean> = new EventEmitter<boolean>();


  showPassword: boolean = false;

  loginData = {
    Email: '',
    Contrasenas: ''
  };

  constructor(private http:HttpClient,private httpOptions:HttpService) { }


  ngOnInit(): void {
  }
  ngAfterViewInit() {
    
  }

  onSubmit() {
    this.http.post<boolean>('https://localhost:7227/Usuarios/Login', this.loginData, this.httpOptions.httpOptions)
  .subscribe(response => {
    if (response) {
      // Inicio de sesión exitoso
      // Almacena los datos del usuario en el session storage
      
      sessionStorage.setItem('usuario', JSON.stringify(this.loginData.Email));
      document.location.reload();
    } else {
      alert("Usuario o contraseña incorrectos");
      // Inicio de sesión fallido
      // Manejo de errores
    }
  }, error => {
    // Manejo de errores
  });

    console.log("onSubmit");
    this.closePopup.emit();
  }


  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  

}
