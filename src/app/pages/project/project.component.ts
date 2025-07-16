import { Component, inject, input, signal } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../interfaces/project.interface';
import { ProjectListComponent } from "../../components/project-list/project-list.component";

@Component({
  selector: 'app-project',
  imports: [ProjectListComponent],
  templateUrl: './project.component.html',
})
export default class ProjectComponent {

  projectService = inject(ProjectService);
  projects = signal<Project[]>(this.projectService.projectsList);
  title : string = 'Mis Proyectos';
  subTitle : string = 'Aquí encontraras todos los proyectos en los que he trabajado.';
}
