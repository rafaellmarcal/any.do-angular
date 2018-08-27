
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TarefaComponent } from './tarefa/tarefa.component';
import { CadastrarTarefaComponent } from './tarefa/cadastrar/cadastrar-tarefa.component';
import { EditarTarefaComponent } from './tarefa/editar/editar-tarefa.component';
import { VisualizarTarefaComponent } from './tarefa/visualizar/visualizar-tarefa.component';
import { LoggedInGuard } from './security/loggedin.guard';
import { UsuarioComponent } from './usuario/usuario.component';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canLoad: [LoggedInGuard], canActivate: [LoggedInGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'cadastrar-usuario', component: UsuarioComponent },
  { path: 'tarefas', component: TarefaComponent, canLoad: [LoggedInGuard], canActivate: [LoggedInGuard] },
  { path: 'cadastrar-tarefa', component: CadastrarTarefaComponent, canLoad: [LoggedInGuard], canActivate: [LoggedInGuard] },
  { path: 'editar-tarefa/:id', component: EditarTarefaComponent, canLoad: [LoggedInGuard], canActivate: [LoggedInGuard] },
  { path: 'visualizar-tarefa/:id', component: VisualizarTarefaComponent, canLoad: [LoggedInGuard], canActivate: [LoggedInGuard] }
];