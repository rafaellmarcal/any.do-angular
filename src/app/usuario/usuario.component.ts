import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/core/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {

  formUsuario: FormGroup;
  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
    this.formUsuario = new FormGroup({
      nome: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      senha: this.fb.control('', [Validators.required])
    });
  }

  cadastrar(usuario: Usuario) {
    this.usuarioService.post(usuario)
      .subscribe(() => this.router.navigate(['/login']));
  }
}
