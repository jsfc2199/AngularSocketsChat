import { Component, inject } from '@angular/core';
import { WebsocketService } from './services/websocket.service';
import { ChatServiceService } from './services/chat-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sockets-basics';

  private websocketService = inject(WebsocketService)
  private chatService = inject(ChatServiceService)

  //escuchamos mensajes privados donde siempre corra el codigo
  ngOnInit(): void {

    this.chatService.getPrivateMessages().subscribe(mensaje => {
      console.log(mensaje)
    })

  }
}
