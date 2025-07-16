import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive,],
  templateUrl: './header.component.html',
})
export class HeaderComponent {

 rutas = routes.map(route => ({
  path: route.path,
  title : `${route.title ?? 'route not title'}`
 })).filter((route) => route.path !== '**');
}
