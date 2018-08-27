import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/model/tarefa.model';
import { TarefaService } from 'src/app/core/tarefa.service';
import { UsuarioService } from '../core/usuario.service';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html'
})
export class TarefaComponent implements OnInit {

  tarefas: Tarefa[] = [];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit() {
    this.tarefaService.getAll()
      .subscribe(tarefas => this.tarefas = tarefas);
  }

  concluir(tarefa: Tarefa) {
    this.tarefaService.changeSituation(tarefa.tarefaid)
      .subscribe(tarefaResponse => {
        let index = this.tarefas.indexOf(tarefa);
        this.tarefas[index] = tarefaResponse;
      });
  }

  excluir(tarefa: Tarefa) {
    this.tarefaService.delete(tarefa.tarefaid)
      .subscribe(response => {
        if (response === true) {
          this.tarefas.splice(this.tarefas.indexOf(tarefa), 1);
        }
      });
  }
}
