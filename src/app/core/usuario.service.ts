import { Injectable, EventEmitter, Output } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { tap } from 'rxjs/operators';
import { AnyDoAPI } from "../app.api";
import { Usuario } from "src/app/model/usuario.model";
import { Router } from "@angular/router";

@Injectable()
export class UsuarioService {

    @Output() loginEmmiter = new EventEmitter<true>();

    constructor(private http: HttpClient, private router: Router) { }

    post(usuario: Usuario): Observable<Usuario> {
        return this.http.post<Usuario>(`${AnyDoAPI}/usuarios`, usuario);
    }

    login(usuario: Usuario): Observable<Usuario> {
        return this.http.post<Usuario>(`${AnyDoAPI}/usuarios/login`, usuario)
            .pipe(
                tap(user => {
                    sessionStorage.setItem('usuarioLogado', JSON.stringify(user));
                    this.loginEmmiter.emit(true);
                }));
    }

    logout() {
        sessionStorage.removeItem('usuarioLogado');
        this.loginEmmiter.emit(true);
    }

    isLoggedIn(): boolean {
        return sessionStorage.getItem('usuarioLogado') !== null;
    }

    userLogged(): Usuario {
        return JSON.parse(sessionStorage.getItem('usuarioLogado'));
    }
}