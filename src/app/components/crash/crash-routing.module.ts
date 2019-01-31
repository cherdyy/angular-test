import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CrashComponent} from './crash.component';

const routes: Routes = [
  { path: 'crash', component: CrashComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrashRoutingModule { }
