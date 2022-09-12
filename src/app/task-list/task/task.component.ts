import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() singleTask:any;
  dataTaskStatus: boolean = false;
  @Output() taskIdToDelete = new EventEmitter<Task>();
  
  constructor() { }

  ngOnInit(): void {
  }
  completeTask(data:Task){
    this.dataTaskStatus = true;
    this.singleTask.taskStatus=true;
  }
  deleteTask(data: Task):void{
    this.taskIdToDelete.emit(data)
  }
}
