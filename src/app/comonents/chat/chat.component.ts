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
  chatSubs = new Subscription();

  mensajes: any[] = [];

  //scroll automático
  elemento!: HTMLElement;

  ngOnInit(): void {
    this.elemento = document.getElementById('chat-mensajes')!;
    this.chatSubs = this.chatService.getMessages().subscribe((msg) => {
      console.log(msg)
      this.mensajes.push(msg);
      setTimeout(() => {
        this.elemento.scrollTop = this.elemento.scrollHeight; //scroll automático
      }, 50);
    });
  }

  texto = '';
  enviar() {
    if (this.texto.trim().length === 0) return;
    this.chatService.sendMessage(this.texto);
    this.texto = '';
  }

  ngOnDestroy(): void {
    this.chatSubs.unsubscribe();
  }
}
