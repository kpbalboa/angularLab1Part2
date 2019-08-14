import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  @Output() onAdd = new EventEmitter<any>();
  constructor() {}
  addTodo(toDoForm: NgForm): void {
    this.onAdd.emit({
      title: toDoForm.value.title
    });
  }

  ngOnInit() {}
}
