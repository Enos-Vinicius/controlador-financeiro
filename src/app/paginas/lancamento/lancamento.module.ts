import { NgModule } from '@angular/core';

import { LancamentoRoutingModule } from './lancamento-routing.module';
import { LancamentoListaComponent } from './lancamento-lista/lancamento-lista.component';
import { LancamentoFormComponent } from './lancamento-form/lancamento-form.component';

import { IMaskModule } from 'angular-imask';
import { CalendarModule } from 'primeng/calendar';


import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    LancamentoListaComponent,
    LancamentoFormComponent
  ],
  imports: [
    SharedModule,
    CalendarModule,
    IMaskModule,
    LancamentoRoutingModule
  ]
})
export class LancamentosModule { }
