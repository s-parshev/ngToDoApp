export class Task{
  taskId: number = 0;
  taskValue: string ="";
  taskStatus: boolean = false;

  constructor(id: number, value:string, status:boolean){
    this.taskId = id;
    this.taskValue = value;
    this.taskStatus = status;
  }
}