import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component } from '@angular/core';
import { makeEmptyTodo, Todo } from '../entities/todo.entity';
import { SaveService } from './services/save.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewChecked {

  todos: Todo[];

  constructor(
    private saveService: SaveService
  ) { }

  ngAfterViewChecked(): void {
    this.todos = this.saveService.loadTodos();
  }

  addTodo() {
    this.todos.push(
      makeEmptyTodo()
    );

    this.saveService.saveTodos(this.todos);
  }
}
