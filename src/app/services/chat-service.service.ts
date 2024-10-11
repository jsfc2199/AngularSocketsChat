import { inject, Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  constructor() { }

  public wsService = inject(WebsocketService)

  sendMessage(mensaje: string){
    const payload = {
      de: this.wsService.getUsuario()?.nombre,
      cuerpo: mensaje
    }

    this.wsService.emit('mensaje', payload);
  }

  getMessages(){
    return this.wsService.listen('mensaje-nuevo')
  }

  getPrivateMessages(){
    return this.wsService.listen('mensaje-privado')
  }
}
