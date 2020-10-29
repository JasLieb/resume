import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeAccordionComponent } from './resume-accordion.component';

describe('ResumeAccordionComponent', () => {
  let component: ResumeAccordionComponent;
  let fixture: ComponentFixture<ResumeAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeAccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
