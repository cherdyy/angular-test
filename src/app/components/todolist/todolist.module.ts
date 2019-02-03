import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodolistRoutingModule } from './todolist-routing.module';
import { TodolistComponent } from './todolist.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule
} from '@angular/material';



@NgModule({
  declarations: [TodolistComponent],
  imports: [
    CommonModule,
    TodolistRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatCheckboxModule,
    ReactiveFormsModule
  ]
})
export class TodolistModule { }
