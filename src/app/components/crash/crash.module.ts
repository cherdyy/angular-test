import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrashRoutingModule } from './crash-routing.module';
import {CrashComponent} from './crash.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [CrashComponent],
  imports: [
    CommonModule,
    CrashRoutingModule,
    FormsModule
  ]
})
export class CrashModule { }
