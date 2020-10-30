import { Component } from '@angular/core';
import { makeTodo, Todo } from '../entities/todo.entity';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  todos: Todo[];

  constructor() {
    this.todos = [];
  }

  addTodo() {
    this.todos.push(
      makeTodo(
        'hello world',
        'say hello to the world'
      )
    );
  }
}
