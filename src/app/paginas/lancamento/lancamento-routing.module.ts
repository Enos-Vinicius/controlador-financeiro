import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LancamentoListaComponent } from './lancamento-lista/lancamento-lista.component';

const routes: Routes = [
  {path: '', component: LancamentoListaComponent},
  // { path: 'new', component: CategoriaFormComponent },
  // { path: ':id/edit', component: CategoriaFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LancamentoRoutingModule { }
