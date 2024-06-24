import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bases';
  success= false;
  passwordResetSucces=false;
  authenticationError=false;
  fehcaError=false;
  userUnlock=false;
  username="";
  password="";
  timeLapse = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.timeLapse = true;
    }, 3000);
  }

  cerrarSesiones(){

  }
  login(){
    this.success = false;
    this.passwordResetSucces = false;
    this.authenticationError = false;
    this.fehcaError = false;
    this.userUnlock = false; // Inicialmente todos los errores desactivados

    // Activar un error aleatoriamente
    const randomNumber = Math.floor(Math.random() * 5); // Genera un número aleatorio entre 0 y 3

    switch (randomNumber) {
      case 0:
        this.success = true;
        break;
      case 1:
        this.passwordResetSucces = true;
        break;
      case 2:
        this.authenticationError = true;
        break;
      case 3:
        this.fehcaError = true;
        break;
      case 4:
        this.userUnlock = true;
        break;
      default:
        break;
    }
  }
  requestResetPassword(){

  }
}
