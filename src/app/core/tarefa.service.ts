import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Tarefa } from '../model/tarefa.model';
import { AnyDoAPI } from '../app.api';
import { UsuarioService } from './usuario.service';

@Injectable()
export class TarefaService {

  constructor(private http: HttpClient, private usuarioService: UsuarioService) { }

  getAll(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(`${AnyDoAPI}/tarefas/usuario/${this.usuarioService.userLogged().usuarioid}`);
  }

  getById(id: number): Observable<Tarefa> {
    return this.http.get<Tarefa>(`${AnyDoAPI}/tarefas/${id}`);
  }

  post(tarefa: Tarefa): Observable<Tarefa> {
    return this.http.post<Tarefa>(`${AnyDoAPI}/tarefas`, tarefa);
  }

  put(tarefa: Tarefa): Observable<Tarefa> {
    return this.http.put<Tarefa>(`${AnyDoAPI}/tarefas/${tarefa.tarefaid}`, tarefa);
  }

  delete(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${AnyDoAPI}/tarefas/${id}`);
  }

  changeSituation(id: number): Observable<Tarefa> {
    return this.http.get<Tarefa>(`${AnyDoAPI}/tarefas/${id}/concluir`);
  }
}
