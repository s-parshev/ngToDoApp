import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-information',
  templateUrl: './task-information.component.html',
  styleUrls: ['./task-information.component.css'],
})
export class TaskInformationComponent implements OnInit {
  @Input() tasksFromAppComponent:any;
  total: number = 0;
  completed: number = 0;
  remain: number = 0;
  @Input() hasValue:boolean =false;

  constructor() {}
  ngOnInit(): void {}
  calculateCompleted(){
    let tempCompleted=0;
    for(const key in this.tasksFromAppComponent){
      if(this.tasksFromAppComponent[key].taskStatus === true){
        tempCompleted++;
      }
    }
    this.completed = tempCompleted;
  }
  calculateRemaining(){
    let tempRemain =0;
    let tempCompleted=0;
    let tempTotal = this.tasksFromAppComponent.length;
    for(const key in this.tasksFromAppComponent){
      if(this.tasksFromAppComponent[key].taskStatus === true){
        tempCompleted++;
      }
    }
    tempRemain = tempTotal - tempCompleted;
    this.remain = tempRemain;
  }
  calculateTotal(){
    this.total = this.tasksFromAppComponent.length;
  }
}
