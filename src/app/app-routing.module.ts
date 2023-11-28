import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'lista-tareas',
    loadChildren: () => import('./pages/lista-tareas/lista-tareas.module').then( m => m.ListaTareasPageModule)
  },
  {
    path: 'diario',
    loadChildren: () => import('./pages/diario/diario.module').then( m => m.DiarioPageModule)
  },
  {
    path: 'add-new-tarea',
    loadChildren: () => import('./pages/add-new-tarea/add-new-tarea.module').then( m => m.AddNewTareaPageModule)
  },
  {
    path: 'apirest',
    loadChildren: () => import('./pages/apirest/apirest.module').then( m => m.ApirestPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
