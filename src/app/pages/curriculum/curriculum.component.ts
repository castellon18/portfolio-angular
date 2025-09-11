import { Component, inject, signal } from '@angular/core';
import { AcademicTrainingService } from '../../services/academic-training.service';
import { TechnicalSkillService } from '../../services/technical-skill.service';
import { AcademicTraining } from '../../interfaces/academic-training.interface';
import { TechnicalSkill } from '../../interfaces/skill.interface';
import { WorkExperienceService } from '../../services/work-experience.service';
import { HeaderComponent } from "./components/header/header.component";
import { ProfessionalProfileComponent } from "./components/professional-profile/professional-profile.component";
import { AcademicTrainingComponent } from './components/academic-training/academic-training.component';
import { SkillsComponent } from "./components/skills/skills.component";
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { WorkExperience } from '../../interfaces/work-experience';
import { LanguageService } from '../../services/language.service';
import { Language } from '../../interfaces/language.interface';
import { LanguageComponent } from './components/language/language.component';

@Component({
  selector: 'app-cv',
  imports: [HeaderComponent, ProfessionalProfileComponent, AcademicTrainingComponent, SkillsComponent, LanguageComponent, WorkExperienceComponent],
  templateUrl: './curriculum.component.html',
})
export default class CurriculumComponent {

  academicTrainingService = inject(AcademicTrainingService);
  technicalSkillService = inject(TechnicalSkillService);
  workExperienceService = inject(WorkExperienceService);
  languageService = inject(LanguageService);

  academicTraining = signal<AcademicTraining[]>(this.academicTrainingService.AcademicTraining);
  technicalSkill = signal<TechnicalSkill[]>(this.technicalSkillService.technicalSkills);
  workExperience = signal<WorkExperience[]>(this.workExperienceService.workExperiences);
  language = signal<Language[]>(this.languageService.languages);

  // Etiquetas para las secciones del CV
  etiquetas: string[] = [
    'perfil profesional',
    'formación académica',
    'habilidades',
    'idiomas',
    'experiencia laboral',
    'proyectos',
  ];
}
