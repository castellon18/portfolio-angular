import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { WorkExperience } from '../../../../interfaces/work-experience';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'curriculum-work-experience',
  imports: [UpperCasePipe],
  templateUrl: './work-experience.component.html',
})
export class WorkExperienceComponent {

  title = input.required<string>();
  workExperience = input.required<WorkExperience[]>();
 }
