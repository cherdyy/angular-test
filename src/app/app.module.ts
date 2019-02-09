import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TodolistModule} from './components/todolist/todolist.module';
import {MatButtonModule, MatMenuModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './core/header/header.component';
import { LayoutModule } from '@angular/cdk/layout';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodolistModule,
    MatMenuModule,
    FormsModule,
    MatButtonModule,
    MatToolbarModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
