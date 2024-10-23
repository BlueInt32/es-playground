import { Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { IndexManagementComponent } from './index-management/index-management.component';

export const routes: Routes = [
  { path: 'index', component: IndexManagementComponent },
  { path: '', component: HomePageComponent },
];
