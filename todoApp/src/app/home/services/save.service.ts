import { Injectable } from '@angular/core';
import { Todo } from 'src/app/entities/todo.entity';

@Injectable({ providedIn: 'root' })
export class SaveService {

  constructor() {}

  saveTodos(todos: Todo[]) {
    localStorage.removeItem('todos');
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  loadTodos(): Todo[] {
    return JSON.parse(localStorage.getItem('todos')) ?? [];
  }

  saveTodo(updatedTodo: Todo) {
    this.saveTodos(
      this.loadTodos().map(
          (todo) => {
                if (todo.id === updatedTodo.id) {
                    todo.name = updatedTodo.name;
                    todo.description = updatedTodo.description;
                }
                return todo;
            }
        )
    );
  }

  loadTodo(id: string) {
    return this.loadTodos().filter((todo) => todo.id === id)[0];
  }

  deleteTodo(id: string) {
    this.saveTodos(
        this.loadTodos().filter(
            todo => todo.id !== id
        )
    );
  }
}
