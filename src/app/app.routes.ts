import { Routes } from '@angular/router';
import { DashboardPageComponent, HomePageComponent } from './pages';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'transacoes',
    component: DashboardPageComponent,
  },
];
