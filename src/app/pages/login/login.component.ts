import { Component, inject } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public wsService = inject(WebsocketService)
  nombre = ''

  ingresar(){
    this.wsService.loginWs(this.nombre)
  }
}
