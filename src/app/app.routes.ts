import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    title: '',
    loadComponent: () => import('./pages/home/home.component'),
  },
  {
    path: 'project',
    title: 'Proyectos',
    loadComponent: () => import('./pages/project/project.component'),
  },
  {
    path: 'curriculum',
    title: 'Curriculum',
    loadComponent: () => import('./pages/curriculum/curriculum.component'),
  },
  {
    path: 'contacto',
    title: 'Contactame',
    loadComponent: () => import('./pages/contact-us/contact-us.component'),
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];
