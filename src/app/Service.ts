import { Observable, BehaviorSubject } from 'rxjs';

export class Service {
  private data = new BehaviorSubject(''); //data hold sharableData
  currentData = this.data.asObservable();

  constructor() {}

  setData(data: any) {
    this.data.next(data);
  }
}
