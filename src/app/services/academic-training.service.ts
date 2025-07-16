import { Injectable } from '@angular/core';
import { AcademicTraining } from '../interfaces/academic-training.interface';

@Injectable({ providedIn: 'root' })
export class AcademicTrainingService {

  private acadenicTraining: AcademicTraining[] = [
    {
      id: 1,
      title: 'Bachiller',
      institution: 'COLEGIO PADRE FAUSTINO MIGUEZ.',
      year: '2024',
    },
    {
      id: 2,
      title: 'Ingeniera en Computación.',
      institution: 'UNIVERSIDAD NACIONAL DE INGENIERIA (UNI).',
      year: '2011',
    },
    {
      id: 3,
      title: 'Excel Avanzado.',
      institution: 'INSTITUTO NICARAGÜENSE DE COMPUTACIÓN (INC).',
      year: '2014 - 2015',
    },
    {
      id: 4,
      title: 'Desarrollo de Aplicaciones en C# con SQL Server.',
      institution: 'UNIVERSIDAD NACIONAL DE INGENIERIA (UNI).',
      year: '2021',
    },
    {
      id: 5,
      title: 'Programación Web con ASP.NET CORE 7.0 MVC.',
      institution: 'UNIVERSIDAD NACIONAL DE INGENIERIA (UNI).',
      year: '2024',
    },
    {
      id: 6,
      title: 'SQL de cero: Tu guía práctica con PostgreSQL.',
      institution: 'DEV/TALLES.',
      year: '2024',
    },
    {
      id: 7,
      title: 'JavaScript Moderno: guía para dominar el lenguaje.',
      institution: 'UDEMY.',
      year: '2024',
    },
  ];

  get AcademicTraining(): AcademicTraining[] {
    return this.acadenicTraining;
  }

}
