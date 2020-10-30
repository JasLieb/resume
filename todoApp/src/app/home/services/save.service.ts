import { Injectable } from '@angular/core';
import { Todo } from 'src/app/entities/todo.entity';

@Injectable({ providedIn: 'root' })
export class SaveService {

    constructor() {}

    saveTodos(todos: Todo[]) {
        localStorage.setItem(
            'todos',
            JSON.stringify(todos)
        );
    }

    loadTodos(): Todo[] {
        return JSON.parse(localStorage.getItem('todos')) ?? [];
    }
}
