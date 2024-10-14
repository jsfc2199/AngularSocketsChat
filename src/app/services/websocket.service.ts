import { inject, Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Usuario } from '../classes/usuario';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  public socketStatus = false;
  public usuario?: Usuario;

  private socket = inject(Socket);

  constructor() {
    this.cargarStorage()
    this.checkStatus();
  }

  checkStatus() {
    //son observables que siempre están atentos a los eventos
    this.socket.on('connect', () => {
      console.log('conectado al servidor');
    this.socketStatus = true;
    //cuando se cae el servidor refrescamos el storage
    this.cargarStorage()
    });

    this.socket.on('disconnect', () => {
      console.log('desconectado del servidor');
      this.socketStatus = false;
    });
  }

  //usamos un emit personalizado que sea global respecto al de socket io
  emit(evento: string, payload?: any, callback?: Function) {
    this.socket.emit(evento, payload, callback);
  }

  //creamos un método que escuche, es decir, un método que escuche cualquier evento que emita el servidor
  listen(evento: string) {
    //debemos retornar un observable
    return this.socket.fromEvent(evento);
  }

  loginWs(nombre: string) {
    //necesitamos que el socket reconozca el nombre
    return new Promise<void>((resolve, reject) => {
      this.socket.emit('configurar-usuario', { nombre }, (resp: any) => {
        this.usuario = new Usuario(nombre) //seteamos el usuario
        this.guardarStorage()
        resolve();
      });
    }); //convertimos a una promesa para que sea asincrono
  }

  guardarStorage(){
    localStorage.setItem('usuario', JSON.stringify(this.usuario))
  }

  cargarStorage(){
    if(localStorage.getItem('usuario')){
      this.usuario = JSON.parse(localStorage.getItem('usuario') ?? '')
      this.loginWs(this.usuario!.nombre)
    }
  }

  getUsuario(){
    return this.usuario
  }
}
