import { UpperCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'curriculum-professional-profile',
  imports: [UpperCasePipe],
  templateUrl: './professional-profile.component.html',
})
export class ProfessionalProfileComponent {

  title = input.required<string>();
}
