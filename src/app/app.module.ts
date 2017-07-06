import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './components/hello-world.component';
import { ToDoComponent } from './components/to-do.component';
import { AddToDoComponent } from './components/add-to-do.component';
import { ToDoListComponent } from './components/to-do-list.component';

import { ToDoService } from './services/to-do.service';

@NgModule({
  declarations: [
    AppComponent,
		HelloWorldComponent,
		ToDoComponent,
		AddToDoComponent,
		ToDoListComponent
  ],
  imports: [
    BrowserModule,
		FormsModule,
    AppRoutingModule
  ],
  providers: [ToDoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
