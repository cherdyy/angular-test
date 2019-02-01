import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  tasks: object[] = [];

  ngOnInit() {

  }
  
  addTask(task){
    let newTask = {
      label: task,
      done: false,
    };
    this.tasks.push(newTask)
  }
  deleteElement(index: number){
    this.tasks.splice(index, 1);
  }
  line__through(index: number){
    this.tasks[index].done = !this.tasks[index].done;
    console.log(this.tasks[index].done)
  }
}
