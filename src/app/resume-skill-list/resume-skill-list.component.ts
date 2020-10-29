import { Component, Input, OnInit } from '@angular/core';
import { Skill } from '../utils/skills.utils';

@Component({
  selector: 'app-resume-skill-list',
  templateUrl: './resume-skill-list.component.html',
  styleUrls: ['./resume-skill-list.component.scss']
})
export class ResumeSkillListComponent implements OnInit {

  @Input() skills: Skill[];

  constructor() { }

  ngOnInit(): void {
  }

  getStars(count: number): string {
    let stars = '';
    for (let _i = 0; _i < count; _i++) {
      stars += '&#11088';
    }

    return stars;
  }
}
