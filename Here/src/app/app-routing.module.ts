import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home-docente',
    loadChildren: () => import('./home-docente/home-docente.module').then( m => m.HomeDocentePageModule)
  },
  {
    path: 'home-estudiante',
    loadChildren: () => import('./home-estudiante/home-estudiante.module').then( m => m.HomeEstudiantePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
