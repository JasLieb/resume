import { Component, OnInit } from '@angular/core';
import {
  Experience,
  makeLPStudy,
  makeSimsoftExperience,
  makeThalesExperience,
  makeAirbusExperience,
  makeDUTStudy,
  makeYnovStudy,
  makeSembatStudy
} from '../utils/experiences.utils';

@Component({
  selector: 'app-resume-studies',
  templateUrl: './resume-studies.component.html',
  styleUrls: ['./resume-studies.component.scss']
})
export class ResumeStudiesComponent implements OnInit {

  studies: Experience[];
  jobs: Experience[];

  constructor() {
    this.studies = [
      makeYnovStudy(),
      makeLPStudy(),
      makeDUTStudy(),
      makeSembatStudy(),
    ];

    this.jobs = [
      makeSimsoftExperience(),
      makeThalesExperience(),
      makeAirbusExperience()
    ];
  }

  ngOnInit(): void {
  }

}
