import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AcademicTraining } from '../../../../interfaces/academic-training.interface';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'curriculum-academic-training',
  imports: [UpperCasePipe],
  templateUrl: './academic-training.component.html',
})
export class AcademicTrainingComponent {

  title = input.required<string>();
  academicTraining = input.required<AcademicTraining[]>();
}
