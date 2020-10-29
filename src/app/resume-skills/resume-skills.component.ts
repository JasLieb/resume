import { Component, OnInit } from '@angular/core';
import { makeFunctionnalSkills, makeSystemSkills, makeTechnicalSkills, makeToolsSkills, Skill } from '../utils/skills.utils';

@Component({
  selector: 'app-resume-skills',
  templateUrl: './resume-skills.component.html',
  styleUrls: ['./resume-skills.component.scss']
})
export class ResumeSkillsComponent implements OnInit {

  technicalSkills: Skill[];
  systemSkills: Skill[];
  toolsSkills: Skill[];
  functionnalSkills: Skill[];

  constructor() { 
    this.technicalSkills = makeTechnicalSkills();
    this.systemSkills = makeSystemSkills();
    this.toolsSkills = makeToolsSkills();
    this.functionnalSkills = makeFunctionnalSkills();
  }

  ngOnInit(): void {
  }

}
