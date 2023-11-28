import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNewTareaPageRoutingModule } from './add-new-tarea-routing.module';

import { AddNewTareaPage } from './add-new-tarea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNewTareaPageRoutingModule
  ],
  declarations: [AddNewTareaPage]
})
export class AddNewTareaPageModule {}
