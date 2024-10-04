import { inject, Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  public socketStatus = false

  private socket = inject(Socket)

  constructor() {
    this.checkStatus()
  }

  checkStatus(){
    //son observables que siempre están atentos a los eventos
    this.socket.on('connect', () => {
      console.log('conectado al servidor')
      this.socketStatus = true
    })

    this.socket.on('disconnect', () => {
      console.log('desconectado del servidor')
      this.socketStatus = false
    })
  }
}
