import { FormGroup, ValidationErrors } from "@angular/forms";

export class FormUtils {

  //Expresiones regulares para validar campos de formulario
  static emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  static telephonePattern = '^[0-9]{8}$';

  static isValidField(form: FormGroup, field: string) : boolean | null {
    return form.controls[field].errors && form.controls[field].touched;
  }

  static getTextError(errors : ValidationErrors) {

    for(const key of Object.keys(errors)){
      switch (key) {
        case 'required':
          return 'Este campo es requerido.';
        case 'pattern':
        if (errors['pattern'].requiredPattern === FormUtils.emailPattern) {
          return 'Formato de correo invalido.';
        }
        if (errors['pattern'].requiredPattern === FormUtils.telephonePattern) {
          return 'El telefono debe tener 8 digitos numericos.';
        }
      }
    }
    return null;
  }

  static getFieldError(form : FormGroup, fieldName: string) : string | null {
    if (!form.controls[fieldName]) return null;
    const errors = form.controls[fieldName].errors ?? {};
    return FormUtils.getTextError(errors);
  }
}
