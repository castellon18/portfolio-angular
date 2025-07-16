import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projects: Project[] = [
    {
      id: 1,
      title: "Amazon",
      description: "E-commerce platform realized with ASP.NET Core",
      imagePath: "assets/img/amazon.PNG",
      url: "https://amazon.com"
    },
    {
      id: 2,
      title: "New York Times",
      description: "News website realized with Angular",
      imagePath: "assets/img/nyt.PNG",
      url: "https://www.nytimes.com"
    },
    {
      id: 3,
      title: "Reddit",
      description: "Social media platform realized with React",
      imagePath: "assets/img/reddit.PNG",
      url: "https://www.reddit.com"
    },
    {
      id: 4,
      title: "Steam",
      description: "Store online to shop for games realized with Angular and ASP.NET Core",
      imagePath: "assets/img/steam.PNG",
      url: "https://www.store.steampowered.com"
    }
  ];

  get projectsList(): Project[] {
    return this.projects;
  }

}
