import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo-edition',
  templateUrl: './todo-edition.page.html',
  styleUrls: ['./todo-edition.page.scss'],
})
export class TodoEditionPage implements OnInit {

  name: string;
  description: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParams.subscribe(params => {
        this.name = params.name;
        this.description = params.description;
    });
}

  ngOnInit() { }

  saveTodo(): void {
    this.router.navigate(['home']);
  }

  deleteTodo(): void {

  }

}
