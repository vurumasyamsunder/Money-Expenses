import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { incomeRoutes,MoniExpencesRoutingModule } from './moni-expences-routing-module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MoniExpencesRoutingModule
  ]
})
export class MoniExpencesModule { }
export const JobWorkModuleWithRoutes = Object.assign(MoniExpencesModule,{routes:incomeRoutes})
