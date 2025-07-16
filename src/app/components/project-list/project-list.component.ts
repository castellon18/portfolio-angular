import { Component, input } from '@angular/core';
import { Project } from '../../interfaces/project.interface';

@Component({
  selector: 'app-project-list',
  imports: [],
  templateUrl: './project-list.component.html',
})
export class ProjectListComponent {

  projects = input.required<Project[]>();
}
