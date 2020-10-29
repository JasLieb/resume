import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { ResumeHeaderComponent } from './resume-header/resume-header.component';
import { ResumeMainComponent } from './resume-main/resume-main.component';
import { ResumeStudiesComponent } from './resume-studies/resume-studies.component';
import { ResumeAccordionComponent } from './resume-accordion/resume-accordion.component';
import { ResumeSkillsComponent } from './resume-skills/resume-skills.component';
import { ResumeSkillListComponent } from './resume-skill-list/resume-skill-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeHeaderComponent,
    ResumeMainComponent,
    ResumeStudiesComponent,
    ResumeAccordionComponent,
    ResumeSkillsComponent,
    ResumeSkillListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
