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

  //usamos un emit personalizado que sea global respecto al de socket io
  emit(evento: string, payload?: any, callback?: Function){
    this.socket.emit(evento, payload, callback)
  }

  //creamos un método que escuche, es decir, un método que escuche cualquier evento que emita el servidor
  listen(evento: string){
    //debemos retornar un observable
    return this.socket.fromEvent(evento);
  }
}
