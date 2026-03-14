import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../../core/guards/auth-guard';

export const incomeRoutes: Routes = [
  {path:'income',
       canActivate: [authGuard],loadComponent:()=>import('./income/income').then(c=>c.Income)}
];

@NgModule({
  imports: [RouterModule.forChild(incomeRoutes)],
  exports: [RouterModule]
})
export class MoniExpencesRoutingModule { }
