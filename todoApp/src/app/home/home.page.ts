import { Component } from '@angular/core';
import { makeTodo, Todo } from '../entities/todo.entity';
import { SaveService } from './services/save.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  todos: Todo[];

  constructor(
    private saveService: SaveService
  ) {
    this.todos = this.saveService.loadTodos();
  }

  addTodo() {
    this.todos.push(
      makeTodo(
        'hello world',
        'say hello to the world'
      )
    );

    this.saveService.saveTodos(this.todos);
  }
}
