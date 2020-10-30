import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Todo } from 'src/app/entities/todo.entity';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.scss'],
})
export class TodoViewComponent implements OnInit {
  @Input() todo: Todo;

  constructor(private router: Router) {}

  ngOnInit() {}

  editTodo(): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        id: this.todo.id
      },
    };

    this.router.navigate(['todo'], navigationExtras);
  }
}
