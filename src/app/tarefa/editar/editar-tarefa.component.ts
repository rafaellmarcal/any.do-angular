import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TarefaService } from 'src/app/core/tarefa.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Tarefa } from 'src/app/model/tarefa.model';

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html'
})
export class EditarTarefaComponent implements OnInit {

  formTarefa: FormGroup;

  constructor(private fb: FormBuilder, private tarefaService: TarefaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.formTarefa = new FormGroup({
      tarefaid: this.fb.control(''),
      titulo: this.fb.control('', [Validators.required]),
      descricao: this.fb.control('', [Validators.required]),
      datacadastro: this.fb.control(''),
      dataconclusao: this.fb.control(''),
      concluida: this.fb.control(''),
      usuarioid: this.fb.control('')
    });

    this.tarefaService.getById(this.route.snapshot.params['id'])
      .subscribe((tarefa) => {
        this.formTarefa.patchValue(tarefa, { onlySelf: true });
      })
  }

  editar(tarefa: Tarefa) {
    this.tarefaService.put(tarefa)
      .subscribe(() => this.router.navigate(['/tarefas']));
  }
}
