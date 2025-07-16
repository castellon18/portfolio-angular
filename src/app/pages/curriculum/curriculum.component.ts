import { UpperCasePipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { AcademicTrainingService } from '../../services/academic-training.service';
import { TechnicalSkillService } from '../../services/technical-skill.service';
import { AcademicTraining } from '../../interfaces/academic-training.interface';
import { TechnicalSkill } from '../../interfaces/skill.interface';

@Component({
  selector: 'app-cv',
  imports: [UpperCasePipe],
  templateUrl: './curriculum.component.html',
})
export default class CurriculumComponent {

  academicTrainingService = inject(AcademicTrainingService);
  technicalSkillService = inject(TechnicalSkillService);

  academicTraining = signal<AcademicTraining[]>(this.academicTrainingService.AcademicTraining);
  technicalSkill = signal<TechnicalSkill[]>(this.technicalSkillService.technicalSkills);

  etiquetas: string[] = [
    'perfil profesional',
    'formación académica',
    'habilidades',
    'idiomas',
    'experiencia laboral',
    'proyectos',
  ];
}
