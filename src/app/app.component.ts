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
  public chatService = inject(ChatServiceService)

  ngOnInit(): void {
    this.chatService.sendMessage('hola desde angular')
  }
}
