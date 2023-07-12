import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { HttpService } from '../services/http/http.service';


@Component({
  selector: 'app-modal-register',
  templateUrl: './modal-register.component.html',
  styleUrls: ['./modal-register.component.scss']
})
export class ModalRegisterComponent implements OnInit {
  @Output() closeRegisterPopup = new EventEmitter();
  @ViewChild('nombreInput') nombreInputRef!: ElementRef;
  @ViewChild('apellidosInput') apellidosInput!: ElementRef;
  @ViewChild('emailInput') emailInput!: ElementRef;
  @ViewChild('contrasena1') contrasena1!: ElementRef;
  @ViewChild('contrasena2') contrasena2!: ElementRef;
  @ViewChild("validationNombre") validationNombre!: ElementRef;
  @ViewChild("validationApellidos") validationApellidos!: ElementRef;
  @ViewChild("validationEmail") validationEmail!: ElementRef;
  @ViewChild("validationContrasena1") validationContrasena1!: ElementRef;
  @ViewChild("validationContrasena2") validationContrasena2!: ElementRef;

  showPassword: boolean = false;

  //DATOS DE REGISTRO

  registrationData = {
    Nombre: '',
    Apellidos: '',
    Email: '',
    Contrasenas: ''
  };
  
  constructor(private http:HttpClient ,private headers:HttpService) {}

  nombreValido = true;
  apellidosValido = true;
  emailValido = true;
  contrasenaValido = true;

  ngOnInit(): void { 

    this.validationNombre.nativeElement.textContent = 'El nombre no puede estar vacío';
   }

  ngAfterViewInit() {
  
  }
 
  //CAMBIAR VISIBILIDAD DE CONTRASEÑA
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  //FUNCION PARA VALIDAR LOS CAMPOS

  validarCampos():void{
    this.nombreValido = this.registrationData.Nombre.trim() !== '';
    this.apellidosValido = this.registrationData.Apellidos.trim() !== '';
    this.emailValido =
    this.registrationData.Email.trim() !== '' &&
    this.registrationData.Email.includes('@') &&
    this.registrationData.Email.includes('.');
    this.contrasenaValido =
    this.registrationData.Contrasenas.trim() !== '' &&
    this.registrationData.Contrasenas.length >= 8 &&
    /[A-Z]/.test(this.registrationData.Contrasenas) &&
    /[0-9]/.test(this.registrationData.Contrasenas) &&
    this.registrationData.Contrasenas === this.contrasena2.nativeElement.value;
  }


  //FUNCION QUE SE EJECUTA AL ENVIAR EL FORMULARIO
  
  onSubmit() {
    
  
  this.validarCampos();

    if(this.nombreValido && this.apellidosValido && this.emailValido && this.contrasenaValido){
      this.http.post('https://localhost:7227/Usuarios/Crear', this.registrationData,this.headers.httpOptions).subscribe(
      response => {
        // Lógica para manejar la respuesta del servidor después de un registro exitoso
        console.log(response);
      },
      error => {
        // Lógica para manejar el error en caso de un registro fallido
        console.error(error);
      }
    );
    this.closeRegisterPopup.emit();
    }else{

    
    }  
  }
  //CERRAR POPUP
  closePopup() {
    this.closeRegisterPopup.emit();
  }
  

}
