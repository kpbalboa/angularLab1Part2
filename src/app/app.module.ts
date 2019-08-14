import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ToDoListComponent } from "./to-do-list/to-do-list.component";
import { FormComponent } from "./form/form.component";
import { FilterComponent } from "./filter/filter.component";

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    FormComponent,
    FilterComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
