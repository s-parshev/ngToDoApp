import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './task.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title:string ='to do app';
  @Input() tasksFromUserInput: Array<Task> = [];
  sendDataToChild: EventEmitter<Array<Task>> = new EventEmitter<Array<Task>>();
  arrayFromChild: Array<Task> = [];
  updateTaskInformation:boolean = false;

  childDataHandler(data: Array<Task>): void {
    this.arrayFromChild = data;
    this.updateTaskInformation = true;
  }
}
