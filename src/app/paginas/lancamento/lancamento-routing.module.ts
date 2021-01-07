import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LancamentoFormComponent } from './lancamento-form/lancamento-form.component';
import { LancamentoListaComponent } from './lancamento-lista/lancamento-lista.component';

const routes: Routes = [
  {path: '', component: LancamentoListaComponent},
  { path: 'new', component: LancamentoFormComponent },
  { path: ':id/edit', component: LancamentoFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LancamentoRoutingModule { }
