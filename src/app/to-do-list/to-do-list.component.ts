import { Component, OnInit } from "@angular/core";
import { todo } from "../todo";
import { from } from "rxjs";
@Component({
  selector: "app-to-do-list",
  templateUrl: "./to-do-list.component.html",
  styleUrls: ["./to-do-list.component.css"]
})
export class ToDoListComponent implements OnInit {
  test: string = "test works";
  todoTitle: string;
  toDos: object[];
  constructor() {}
  ngOnInit() {
    this.todoTitle = "";
    this.toDos = [
      {
        title: "finish lab",
        completed: false
      },
      {
        title: "fuck this shit",
        completed: false
      }
    ];
  }
  onAddHandler(newToDo: object): void {
    this.toDos.push(newToDo);
  }
  complete(i) {
    this.toDos[i].completed = true;
    console.log(this.toDos[i]);
  }
  deleteItem(i) {
    this.toDos.splice(i, 1);
  }
}
