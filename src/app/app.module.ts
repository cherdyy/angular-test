import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProfileModule} from './components/profile/profile.module';
import {DashboardModule} from './components/dashboard/dashboard.module';
import {CrashModule} from './components/crash/crash.module';
import {HeaderComponent} from './core/header/header.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProfileModule,
    DashboardModule,
    CrashModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
