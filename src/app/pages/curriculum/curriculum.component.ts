import { UpperCasePipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { AcademicTrainingService } from '../../services/academic-training.service';
import { TechnicalSkillService } from '../../services/technical-skill.service';
import { AcademicTraining } from '../../interfaces/academic-training.interface';
import { TechnicalSkill } from '../../interfaces/skill.interface';
import { WorkExperienceService } from '../../services/work-experience.service';

@Component({
  selector: 'app-cv',
  imports: [UpperCasePipe],
  templateUrl: './curriculum.component.html',
})
export default class CurriculumComponent {

  academicTrainingService = inject(AcademicTrainingService);
  technicalSkillService = inject(TechnicalSkillService);
  workExperienceService = inject(WorkExperienceService);

  academicTraining = signal<AcademicTraining[]>(this.academicTrainingService.AcademicTraining);
  technicalSkill = signal<TechnicalSkill[]>(this.technicalSkillService.technicalSkills);
  workExperience = signal(this.workExperienceService.workExperiences);

  etiquetas: string[] = [
    'perfil profesional',
    'formación académica',
    'habilidades',
    'idiomas',
    'experiencia laboral',
    'proyectos',
  ];
}
