import { Component, inject } from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import { FormUtils } from '@utils/form-utils';
import { RouterLink } from '@angular/router';
import { EmailJsService } from '@services/email-js.service';
import { SendEmail } from '@interfaces/send-email.interface';
import { environment } from '@env/environment';

@Component({
  selector: 'app-contact-us',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './contact-us.component.html',
})
export default class ContactUsComponent {

  successMessage: string = '';
  errorMessage: string = '';

  private emailJsServices = inject(EmailJsService);
  private sendEmail : SendEmail = {} as SendEmail;
  private formBuilder = inject(FormBuilder);
  formUtils = FormUtils;
  myForm = this.formBuilder.group({
    names: ['', Validators.required],
    lastnames: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern(this.formUtils.emailPattern)]],
    phonenumber: ['', [Validators.required, Validators.pattern(this.formUtils.telephonePattern)]],
    message: ['', Validators.required],
  });

  onSubmitForm() {
    if (this.myForm.valid) {
      this.myForm.markAllAsTouched();
      this.sendEmail = {
        service_id: environment.ServiceId,
        template_id: environment.TemplateId,
        user_id: environment.UserId,
        template_params: {
          names: this.myForm.value.names || '',
          lastnames: this.myForm.value.lastnames || '',
          email: this.myForm.value.email || '',
          phonenumber: this.myForm.value.phonenumber || '',
          message: this.myForm.value.message || '',
        }
      };
      this.emailJsServices.sendEmail(this.sendEmail).subscribe({
        next: (response) => {
          this.successMessage = 'Mensaje enviado correctamente. Gracias por contactarme.';
          this.errorMessage = '';
          console.log('SUCCESS!', response);
          this.myForm.reset();
          setTimeout(() => {
            this.successMessage = '';
          }, 5000);
        },
        error: (error) =>{
          this.errorMessage = 'Ocurrio un error al enviar el mensaje. Intenta nuevamente mas tarde.';
          this.successMessage = '';
          console.log('FAILED...', error);
          setTimeout(() => {
            this.errorMessage = '';
          }, 5000);
        }
      })
    };
  }

  onPhoneInput(event: Event) {
  const input = event.target as HTMLInputElement;
  const soloNumeros = input.value.replace(/\D/g, '').slice(0, 8);
  input.value = soloNumeros;
  this.myForm.get('phonenumber')?.setValue(soloNumeros, { emitEvent: false });
}
}
