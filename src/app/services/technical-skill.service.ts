import { Injectable } from '@angular/core';
import { TechnicalSkill } from '../interfaces/skill.interface';

@Injectable({providedIn: 'root'})
export class TechnicalSkillService {

  private technicalSkill: TechnicalSkill[] = [
    {
      id: 1,
      name:'Programación',
      skill:[
        {
          name:'Backend',
          list:[
            'ASP .NET Core (C#)',
            'Nodejs',
            'Express',
          ],
        },
        {
          name:'Frontend',
          list:[
            'HTML5',
            'CSS3',
            'JavaScript',
            'TypeScript',
            'Angular',
            'Blazor',
          ],
        },
        {
          name:'Bases de datos',
          list:[
            'SQL Server',
            'PostgreSQL',
          ],
        },
        {
          name:'Otras tecnologías',
          list:[
            'Git',
            'GitHub',
            'Docker',
            'Postman',
            'Office 305',
          ],
        }
      ],
    },
    {
      id: 2,
      name:'Contabilidad',
      skill:[
        {name: 'Prácticas contables',},
        {name: 'Integridad y honestidad',},
        {name: 'Multitarea',},
      ],
    },
    {
      id: 3,
      name:'Inventario',
      skill:[
        {name: 'Conocimiento de logísca y almacén',},
        {name: 'Organización.',},
        {name: 'Trabajo en equipo.',},
        {name: 'Comunicación Efectiva.',},
      ],
    },
    {
      id: 4,
      name:'Otros',
      skill:[
        {name: 'Capacidad de aprendizaje',},
        {name: 'Autodidacta.',},
        {name: 'Expresivo.',},
        {name: 'Adaptabilidad.',},
        {name: 'Resolución de Problemas.',},
      ],
    }
  ];

  get technicalSkills(): TechnicalSkill[] {
    return this.technicalSkill;
  }
}
