import { Component, inject } from '@angular/core';
import { ChatServiceService } from '../../services/chat-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.css'
})
export class ListaUsuariosComponent {

  private chatService = inject(ChatServiceService)

  public usuariosActivosObs!: Observable<any>

  ngOnInit(): void {
    this.usuariosActivosObs = this.chatService.getUsuariosActivos()
  }
}
