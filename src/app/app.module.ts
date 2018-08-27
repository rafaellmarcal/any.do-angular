import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { ROUTES } from './app.route';
import { MenuComponent } from './menu/menu.component';
import { TarefaComponent } from './tarefa/tarefa.component';
import { CadastrarTarefaComponent } from './tarefa/cadastrar/cadastrar-tarefa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TarefaService } from './core/tarefa.service';
import { DatePipe } from '@angular/common';
import { EditarTarefaComponent } from './tarefa/editar/editar-tarefa.component';
import { VisualizarTarefaComponent } from './tarefa/visualizar/visualizar-tarefa.component';
import { UsuarioService } from './core/usuario.service';
import { LoggedInGuard } from './security/loggedin.guard';
import { UsuarioComponent } from './usuario/usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    TarefaComponent,
    CadastrarTarefaComponent,
    EditarTarefaComponent,
    VisualizarTarefaComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules })
  ],
  providers: [TarefaService, UsuarioService, LoggedInGuard, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
