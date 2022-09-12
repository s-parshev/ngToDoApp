import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from '../task.model';
@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'],
})
export class UserInputComponent implements OnInit {
  @Output() sendData: EventEmitter<Array<Task>> = new EventEmitter<
    Array<Task>
  >();
  tasks: Task[] = [];
  userInput: string = '';

  constructor() {}
  ngOnInit(): void {}
  sendToParent() {
    this.sendData.emit(this.tasks);
  }
  getUserInput(event: any): void {
    this.userInput = event.target.value;
  }
  saveUserInput(): void {
    if (this.userInput) {
      let tempId = parseInt(
        (Math.random() * 10000 * this.userInput.length).toFixed(0)
      );
      let tempTaskValue = this.userInput;
      let tempTaskStatus = false;
      let tempTask = new Task(tempId, tempTaskValue, tempTaskStatus);
      this.tasks.push(tempTask);
      this.sendToParent();
    }
  }
}
