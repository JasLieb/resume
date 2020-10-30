import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { makeTodo, Todo } from 'src/app/entities/todo.entity';
import { SaveService } from '../services/save.service';

@Component({
  selector: 'app-todo-edition',
  templateUrl: './todo-edition.page.html',
  styleUrls: ['./todo-edition.page.scss'],
})
export class TodoEditionPage implements OnInit {

  id: string;
  name: string;
  description: string;

  constructor(
    private saveService: SaveService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParams.subscribe(params => {
        this.id = params.id;
        const loadedTodo = this.saveService.loadTodo(this.id);

        this.name = loadedTodo.name;
        this.description = loadedTodo.description;
    });
}

  ngOnInit() { }

  saveTodo(): void {
    this.saveService.saveTodo(
      this.makeTodoEntity()
    );
    this.comeBackHomePage();
  }

  deleteTodo(): void {
    this.saveService.deleteTodo(this.id);
    this.comeBackHomePage();
  }

  private makeTodoEntity(): Todo {
    return makeTodo(
      this.id,
      this.name,
      this.description
    );
  }

  private comeBackHomePage() {
    this.router.navigate(['home']);
  }
}
