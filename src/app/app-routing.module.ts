import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelloWorldComponent } from './components/hello-world.component';
import { ToDoComponent } from './components/to-do.component';

const routes: Routes = [
  {
    path: '',
		pathMatch: 'full',
		component: ToDoComponent
  },
	{
		path: 'hello',
		component: HelloWorldComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
