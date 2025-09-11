import { Injectable } from '@angular/core';
import { Language } from '../interfaces/language.interface';

@Injectable({providedIn: 'root'})
export class LanguageService {

  private Languages: Language[] = [
    {
      id: 1,
      name: 'Español',
      level: 'Nativo',
      comes_from: 'Latinoamérica',
    },
    {
      id: 2,
      name: 'Inglés',
      level: 'Intermedio',
      comes_from: 'Estados Unidos',
    }
  ];

  get languages(): Language[] {
    return this.Languages;
  }
}
