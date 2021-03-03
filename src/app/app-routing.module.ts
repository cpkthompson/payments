import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {ResultsComponent} from './results/results.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    pathMatch: 'full'
  },
  {
    path: 'results',
    component: ResultsComponent,
    pathMatch: 'full',
  },
  {
    path: 'case',
    loadChildren: () => import('./case/case.module').then(m => m.CaseModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
