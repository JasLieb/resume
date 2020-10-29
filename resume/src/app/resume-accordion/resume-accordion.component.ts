import { Component, Input, OnInit } from '@angular/core';
import { Experience } from '../utils/experiences.utils';

@Component({
  selector: 'app-resume-accordion',
  templateUrl: './resume-accordion.component.html',
  styleUrls: ['./resume-accordion.component.scss']
})
export class ResumeAccordionComponent implements OnInit {

  @Input() experiences: Experience[];

  constructor() { }

  ngOnInit(): void {
  }

}
