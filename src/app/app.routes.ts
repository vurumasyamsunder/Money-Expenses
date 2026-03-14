import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'',loadComponent:()=>import('./pages/login/login').then(c=>c.Login)},
    {
        path:'navigation',loadComponent:()=>import('./pages/navigation/navigation').then(c=>c.Navigation),
        children:[
            {path:'income',loadComponent:()=>import('./pages/moni-expences/income/income').then(c=>c.Income)}
        ]
    },
];
