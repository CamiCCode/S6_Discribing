import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNewTareaPage } from './add-new-tarea.page';

const routes: Routes = [
  {
    path: '',
    component: AddNewTareaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNewTareaPageRoutingModule {}
