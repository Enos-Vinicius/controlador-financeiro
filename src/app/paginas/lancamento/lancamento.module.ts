import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LancamentoRoutingModule } from './lancamento-routing.module';
import { LancamentoListaComponent } from './lancamento-lista/lancamento-lista.component';
import { LancamentoFormComponent } from './lancamento-form/lancamento-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LancamentoListaComponent,
    LancamentoFormComponent
  ],
  imports: [
    CommonModule,
    LancamentoRoutingModule,
    ReactiveFormsModule
  ]
})
export class LancamentosModule { }
