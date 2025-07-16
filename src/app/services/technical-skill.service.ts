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
            '.NET Core (C#)',
            'Nodejs',
            'NestJs',
          ],
        },
        {
          name:'Frontend',
          list:[
            'Angular',
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
            'Excel',
          ],
        }
      ],
    },
    {
      id: 2,
      name:'Contabilidad',
      skill:[
        {name: 'Conocimientos contables básicos',}
      ],
    },
    {
      id: 3,
      name:'Inventario',
      skill:[
        {name: 'Manejo y seguimiento de Kardex.',},
        {name: 'Análisis de faltantes en las entradas y salidas.',},
      ],
    },
    {
      id: 4,
      name:'Otros',
      skill:[
        {name: 'Fácil aprendizaje',},
        {name: 'Autodidacta.',},
        {name: 'Expresivo.',},
      ],
    }
  ];

  get technicalSkills(): TechnicalSkill[] {
    return this.technicalSkill;
  }
}
