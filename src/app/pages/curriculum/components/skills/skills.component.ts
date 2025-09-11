import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TechnicalSkill } from '../../../../interfaces/skill.interface';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'curriculum-skills',
  imports: [UpperCasePipe],
  templateUrl: './skills.component.html',
})
export class SkillsComponent {

  title = input.required<string>();
  technicalSkill = input.required<TechnicalSkill[]>();
}
