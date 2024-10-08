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
      de: 'Juan',
      mensaje
    }

    this.wsService.emit('mensaje', payload);
  }

  getMessages(){
    return this.wsService.listen('mensaje-nuevo')
  }
}
