import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChildren } from '@angular/core';
import type { QueryList } from '@angular/core';
import { Animation, ModalController } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';
import { AddNewTareaPage } from '../add-new-tarea/add-new-tarea.page';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.page.html',
  styleUrls: ['./lista-tareas.page.scss'],
})
export class ListaTareasPage implements OnInit {

  todoList = [{
    itemName : 'Programar',
    itemDueDate : '08-11-23',
    itemPriority : 'Alta',
    itemCategory : 'Estudios'
  },
  {
    itemName : 'Entregar Informe',
    itemDueDate : '08-11-23',
    itemPriority : 'Media',
    itemCategory : 'Trabajo'
  },
  {
    itemName : 'Ir de compras',
    itemDueDate : '25-11-23',
    itemPriority : 'Baja',
    itemCategory : 'Personal'
  }
]

  today : number = Date.now()



  constructor(public modalCtrl:ModalController, public todoService:TodoService) { 

  }

  async addTask(){
    const modal = await this.modalCtrl.create({
      component: AddNewTareaPage
    })

    modal.onDidDismiss().then(newTaskObj =>{
      console.log(newTaskObj.data);
      this.todoList.push(newTaskObj.data)

    })

    return await modal.present()
  }



  borrar(index:number){
    this.todoList.splice(index,1)

  }

  ngOnInit() {
  }


 
}