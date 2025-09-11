import { Component, input } from '@angular/core';
import { Project } from '../../../../interfaces/project.interface';

interface Cancion {
  title : string;
  imageUrl: string;
  artist: string;
}

@Component({
  selector: 'home-list-skill',
  imports: [],
  templateUrl: './list-skill.component.html',
})

export class ListSkillComponent {

  projectList = input.required<Project[]>();

}
