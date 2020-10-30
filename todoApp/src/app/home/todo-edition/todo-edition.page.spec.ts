import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TodoEditionPage } from './todo-edition.page';

describe('TodoEditionPage', () => {
  let component: TodoEditionPage;
  let fixture: ComponentFixture<TodoEditionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoEditionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TodoEditionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
