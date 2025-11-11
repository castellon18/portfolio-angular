import { Injectable } from '@angular/core';
import { AcademicTraining } from '../interfaces/academic-training.interface';

@Injectable({ providedIn: 'root' })
export class AcademicTrainingService {

  private acadenicTraining: AcademicTraining[] = [
    {
      id: 1,
      title: 'Bachiller',
      institution: 'Colegio Padre Faustino Miguez.',
      year: '2004',
    },
    {
      id: 2,
      title: 'Ingeniera en Computación.',
      institution: 'Universidad Nacional de Ingenieria (UNI).',
      year: '2011',
    },
    {
      id: 3,
      title: 'Excel Avanzado.',
      institution: 'Instituto Nicaragüense de Computación (INC).',
      year: '2015',
    },
    {
      id: 4,
      title: 'Desarrollo de Aplicaciones en C# con SQL Server.',
      institution: 'Universidad Nacional de Ingenieria (UNI).',
      year: '2021',
    },
    {
      id: 5,
      title: 'Programación Web con ASP.NET CORE 7.0 MVC.',
      institution: 'Universidad Nacional de Ingenieria (UNI).',
      year: '2024',
    },
    {
      id: 6,
      title: 'SQL de cero: Tu guía práctica con PostgreSQL.',
      institution: '{dev/talles}.',
      year: '2024',
      instructor: 'Fernando Herrera',
    },
    {
      id: 7,
      title: 'JavaScript Moderno: guía para dominar el lenguaje.',
      institution: 'Udemy.',
      year: '2025',
      instructor: 'Fernando Herrera',
    },
    {
      id: 8,
      title: 'Aprende ASP.NET Core MVC 9 Haciendo Proyectos Desde Cero',
      institution: 'Udemy.',
      year: '2025',
      instructor: 'Felipe Gavilán',
    },
    {
      id: 9,
      title: 'Angular. De cero a experto.',
      institution: '{dev/talles}.',
      year: '2025',
      instructor: 'Fernando Herrera',
    },
    {
      id: 10,
      title: 'Node.js: De cero a experto.',
      institution: '{dev/talles}.',
      year: '2025',
      instructor: 'Fernando Herrera',
    },
    {
      id: 10,
      title: 'C#: Empieza tu camino en el lenguaje.',
      institution: '{dev/talles}.',
      year: '2025',
      instructor: 'Teddy Paz',
    },
    {
      id: 11,
      title: '.NET Backend: .NET Core SQL Server y seguridad JWT.',
      institution: '{dev/talles}.',
      year: '2025',
      instructor: 'Teddy Paz',
    },
  ];

  get AcademicTraining(): AcademicTraining[] {
    return this.acadenicTraining;
  }

}
