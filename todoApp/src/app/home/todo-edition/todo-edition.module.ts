import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodoEditionPageRoutingModule } from './todo-edition-routing.module';

import { TodoEditionPage } from './todo-edition.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodoEditionPageRoutingModule
  ],
  declarations: [TodoEditionPage]
})
export class TodoEditionPageModule {}
