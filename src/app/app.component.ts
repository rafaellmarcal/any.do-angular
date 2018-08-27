import { Component } from '@angular/core';
import { UsuarioService } from './core/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  usuarioLogado: boolean;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    if(this.usuarioService.isLoggedIn()){
      this.usuarioLogado = true;
    }

    this.usuarioService.loginEmmiter.subscribe(() =>
      this.usuarioLogado = this.usuarioService.isLoggedIn()
    );
  }
}
