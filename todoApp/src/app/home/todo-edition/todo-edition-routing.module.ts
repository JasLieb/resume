import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoEditionPage } from './todo-edition.page';

const routes: Routes = [
  {
    path: '',
    component: TodoEditionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoEditionPageRoutingModule {}
