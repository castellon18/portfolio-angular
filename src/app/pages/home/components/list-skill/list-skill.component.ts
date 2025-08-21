import { Component, input } from '@angular/core';

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

  song = input.required<Cancion[]>();

}
