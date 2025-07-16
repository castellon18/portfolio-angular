import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import { FormUtils } from '../../utils/form-utils';

@Component({
  selector: 'app-contact-us',
  imports: [ReactiveFormsModule,],
  templateUrl: './contact-us.component.html',
})
export default class ContactUsComponent {

  private formBuilder = inject(FormBuilder);
  formUtils = FormUtils;
  myForm = this.formBuilder.group({
    names: ['', Validators.required],
    lastnames: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern(this.formUtils.emailPattern)]],
    message: ['', Validators.required],
  });

  onSubmitForm() {
    if (this.myForm.valid) {
      this.myForm.markAllAsTouched();
      console.log({ value: this.myForm.value });
      this.myForm.reset();
    }
  }
}
