import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CaseComponent} from './case.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: ':slug',
    component: CaseComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [CaseComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CaseModule { }
