import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrashRoutingModule } from './crash-routing.module';
import {CrashComponent} from './crash.component';

@NgModule({
  declarations: [CrashComponent],
  imports: [
    CommonModule,
    CrashRoutingModule
  ]
})
export class CrashModule { }
