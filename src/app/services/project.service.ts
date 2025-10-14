import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projects: Project[] = [
    {
      id: 1,
      title: "Manejo Presupuesto",
      description: "Sistema de manejo de presupuesto personal realizado con ASP.NET Core MVC C#, base de datos SQL Server",
      imagePath: "assets/img/manejo-presupuesto.png",
      url: "http://dayemi.somee.com/"
    },
    {
      id: 2,
      title: "Portafolio",
      description: "Pagina web portafolio personal realizada con ASP.NET MVC C#.",
      imagePath: "assets/img/Portafolio-ASP-NET-MVC.png",
      url: "https://github.com/castellon18/portafolio-asp-net-mvc.git"
    },
    {
      id: 3,
      title: "Country App",
      description: "Aplicacion web que muestra informacion de paises, realizada con Angular y consumiendo una API REST.",
      imagePath: "assets/img/Country-App.png",
      url: "https://github.com/castellon18/country-app-angular.git"
    },
    {
      id: 4,
      title: "App Store",
      description: "Aplicacion web tipo tienda de aplicaciones, realizada con ASP.NET MVC C# y base de datos SQL Lite.",
      imagePath: "assets/img/App-Store.png",
      url: "https://github.com/castellon18/appstore-asp-net-mvc.git"
    }
  ];

  get projectsList(): Project[] {
    return this.projects;
  }

}
