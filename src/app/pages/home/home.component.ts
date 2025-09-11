import { Component, inject, signal } from '@angular/core';
import { SkillsComponent } from "./components/skills/skills.component";
import { ListSkillComponent } from "./components/list-skill/list-skill.component";
import { PresentationComponent } from "./components/presentation/presentation.component";
import { ProjectService } from '../../services/project.service';
import { Project } from '../../interfaces/project.interface';

interface Cancion {
  title : string;
  imageUrl: string;
  artist: string;
}

@Component({
  selector: 'app-home',
  imports: [SkillsComponent, ListSkillComponent, PresentationComponent],
  templateUrl: './home.component.html',
})
export default class HomeComponent {

  projectsService = inject(ProjectService);
  getProjects = signal<Project[]>(this.projectsService.projectsList);
}
