import { Input, Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  @Input() tasksFromAppComponent:any;
  
  constructor() {}

  ngOnInit(): void {}
  handleDeleting(data: any):void{
    for(const key in this.tasksFromAppComponent){
      if(this.tasksFromAppComponent[key].taskId === data.taskId){
        let index = this.tasksFromAppComponent.indexOf(data);
        this.tasksFromAppComponent.splice(index,1);
      }
    }
  }
}
