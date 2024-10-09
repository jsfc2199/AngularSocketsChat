import { Component, inject } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public wsService = inject(WebsocketService)
  private router = inject(Router)

  nombre = ''

  ingresar(){
    this.wsService.loginWs(this.nombre).then(() => {
      this.router.navigateByUrl('/mensajes')
    })
  }
}
