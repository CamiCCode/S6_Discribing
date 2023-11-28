import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from 'src/app/services/todo.service';

interface TaskObject {
  itemName: string;
  itemDate: Date;
  itemPriority: string;
  itemCategory: string;
}

@Component({
  selector: 'app-add-new-tarea',
  templateUrl: './add-new-tarea.page.html',
  styleUrls: ['./add-new-tarea.page.scss'],
})
export class AddNewTareaPage implements OnInit {

  categories =['trabajo', 'personal', 'casa']
  
  itemName: string = '';
  itemDate: Date = new Date();
  itemPriority: string = '';
  itemCategory: string = '';

  taskObject!: TaskObject;


  constructor(public modalCtrl: ModalController, public todoService:TodoService) {
    this.taskObject = {
      itemName: '',
      itemDate: new Date(),
      itemPriority: '',
      itemCategory: ''
    };
  }

  ngOnInit() {
  }

  async cerrar(){
    await this.modalCtrl.dismiss(this.taskObject)

  }

  selectedCategory(index:number){
    this.itemCategory =this.categories[index]

  }

  async AddTask(){
    this.taskObject = {
      itemName: this.itemName,
      itemDate: this.itemDate,
      itemPriority: this.itemPriority,
      itemCategory: this.itemCategory
    };    

    this.cerrar()

  }


}
