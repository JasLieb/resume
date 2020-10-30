import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { TodoViewComponent } from './todo-view/todo-view.component';
import { TodoEditionPage } from './todo-edition/todo-edition.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    TodoViewComponent,
    TodoEditionPage
  ]
})
export class HomePageModule {}
