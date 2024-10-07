import { Component, inject } from '@angular/core';
import { ChatServiceService } from '../../services/chat-service.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {

  chatService= inject(ChatServiceService)

  texto = ''
  enviar(){
    this.chatService.sendMessage(this.texto)
    this.texto= ''
  }
}
