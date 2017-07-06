import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { ToDoService } from '../services/to-do.service';

@Component({
	selector: 'to-do-list',
	templateUrl: 'to-do-list.component.html'
	//styleUrls: ['./heroes.component.css']
})
export class ToDoListComponent {
	toDos: string[];

	constructor(
		private toDoService: ToDoService
	) { }

	ngOnInit(): void {
		this.getTodos();
	}

	getTodos(): void {
		this.toDoService.getToDos()
			.then(() =>
				this.toDos = this.toDoService.toDos
			);
	}
}
