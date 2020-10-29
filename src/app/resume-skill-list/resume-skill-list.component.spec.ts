import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeSkillListComponent } from './resume-skill-list.component';

describe('ResumeSkillListComponent', () => {
  let component: ResumeSkillListComponent;
  let fixture: ComponentFixture<ResumeSkillListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeSkillListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeSkillListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
