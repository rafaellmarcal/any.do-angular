import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../core/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  usuarioLogado: boolean;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    if (this.usuarioService.isLoggedIn()) {
      this.usuarioLogado = true;
    }

    this.usuarioService.loginEmmiter.subscribe(() =>
      this.usuarioLogado = this.usuarioService.isLoggedIn()
    );
  }

  logout() {
    this.usuarioService.logout();
  }
}
