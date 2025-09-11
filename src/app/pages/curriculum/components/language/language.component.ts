import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Language } from '../../../../interfaces/language.interface';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'curriculum-language',
  imports: [UpperCasePipe],
  templateUrl: './language.component.html',
})
export class LanguageComponent {

  title = input.required<string>();
  language = input.required<Language[]>();
}
