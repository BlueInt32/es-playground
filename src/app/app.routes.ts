import { Routes } from '@angular/router';

import { CodeSamplesComponent } from './code-samples/code-samples.component';
import { HomePageComponent } from './home-page/home-page.component';
import { IndexManagementComponent } from './index-management/index-management.component';

export const routes: Routes = [
  { path: 'index-management', component: IndexManagementComponent },
  { path: 'code-samples', component: CodeSamplesComponent },
  { path: '', component: HomePageComponent },
];
