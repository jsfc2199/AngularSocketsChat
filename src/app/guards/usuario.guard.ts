import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { WebsocketService } from '../services/websocket.service';

export const usuarioGuard: CanActivateFn = (route, state) => {
  const wsService = inject(WebsocketService);
  const router = inject(Router);

  if (wsService.getUsuario()) {
    return true;
  } else {
    router.navigateByUrl('/');
    return false;
  }
};
