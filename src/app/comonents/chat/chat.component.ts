import { Component, inject } from '@angular/core';
import { ChatServiceService } from '../../services/chat-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css',
})
export class ChatComponent {
  chatService = inject(ChatServiceService);
  chatSubs = new Subscription()

  ngOnInit(): void {
    this.chatSubs = this.chatService.getMessages().subscribe((msg) => console.log(msg));
  }

  texto = '';
  enviar() {
    this.chatService.sendMessage(this.texto);
    this.texto = '';
  }

  ngOnDestroy(): void {
    this.chatSubs.unsubscribe()
  }
}
