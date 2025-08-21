import { Component } from '@angular/core';
import { SkillsComponent } from "./components/skills/skills.component";
import { ListSkillComponent } from "./components/list-skill/list-skill.component";

interface Cancion {
  title : string;
  imageUrl: string;
  artist: string;
}

@Component({
  selector: 'app-home',
  imports: [SkillsComponent, ListSkillComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export default class HomeComponent {
  songs: Cancion[] = [
    { title: 'Dio Lupa', artist: 'Remaining Reason', imageUrl: 'https://img.daisyui.com/images/profile/demo/1@94.webp' },
    { title: 'Ellie Beilish', artist: 'Bears of a fever', imageUrl: 'https://img.daisyui.com/images/profile/demo/4@94.webp' },
    { title: 'Sabrino Gardener', artist: 'Cappuccino', imageUrl: 'https://img.daisyui.com/images/profile/demo/3@94.webp' }
  ];
}
