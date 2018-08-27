import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/core/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
    this.formLogin = new FormGroup({
      email: this.fb.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      senha: this.fb.control('', [Validators.required])
    });
  }

  login(usuario: Usuario) {
    this.usuarioService.login(usuario)
      .subscribe(() => this.router.navigate(['/home']));
  }
}
