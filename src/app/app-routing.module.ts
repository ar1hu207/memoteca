import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'listarPensamento',
    pathMatch:'full'
  },

  {
    path:'criarPensamento',
    component: CriarPensamentoComponent
  },

  {
    path:'listarPensamento',
    component: ListarPensamentoComponent
  },
  {
    path:'pensamentos/excluirPensamento/:id',
    component: ExcluirPensamentoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
