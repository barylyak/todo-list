import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  todos: any[] = [
    {name: 'Html', isChecked: true, progress: 'DONE'},
    {name: 'CSS', isChecked: true, progress: 'DONE'},
    {name: 'JS', isChecked: true, progress: 'DONE'},
    {name: 'Angular', isChecked: false, progress: 'IN PROGRESS'},
    {name: 'Node JS', isChecked: false, progress: 'IN PROGRESS'},
  ];

  constructor() {
  }

  getTodos() {
    return this.todos;
  }
}
