import {Component, OnInit} from '@angular/core';
import {HttpService} from '../services/http.service';
import {MatDialog} from '@angular/material/dialog';
import {ModalComponent} from "../modal/modal.component";


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: any[] = [];
  temptodos: any[] = [];

  inputValue: any;

  constructor(public httpService: HttpService, public dialog: MatDialog) {
    this.todos = this.httpService.getTodos();
    this.temptodos = this.todos;
  }

  ngOnInit(): void {
  }

  add() {
    const newTodo = {
      name: this.inputValue,
      isChecked: false,
      progress: 'IN PROGRESS'
    };

    this.todos.push(newTodo);
    this.temptodos.push(newTodo);
  }

  delete(index) {
    this.todos.splice(index, 1);
  }

  changeStatus(todo) {
    todo.progress = todo.isChecked ? 'DONE' : 'IN PROGRESS';
  }

  onSearch() {
    if (!this.inputValue) this.temptodos = this.todos;
    else {
      this.temptodos = this.temptodos.filter(item => item.name.search(new RegExp(this.inputValue, 'i')) > -1);
    }
  }

  openDialog(todoName: string, index: number) {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '600px',

      data: {name: todoName}
    });

    dialogRef.afterClosed().subscribe(name => {
      this.todos[index].name = name;
      this.temptodos = this.todos;
    });
  }
}
