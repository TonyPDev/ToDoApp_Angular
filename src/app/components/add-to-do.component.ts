import { Component } from '@angular/core';

import { ToDoService } from '../services/to-do.service';

@Component({
	selector: 'add-to-do',
	templateUrl: 'add-to-do.component.html'
	//styleUrls: ['./heroes.component.css']
})
export class AddToDoComponent {
	model = [];

	constructor(
		private toDoService: ToDoService
	) { }

	onSubmit(formData): void {
		if (!formData.item) { return; }
		this.createToDo(formData.item);
	}

	createToDo(item: string): void {
		item = item.trim();
		if (!item) { return; }
		this.toDoService.create(item);
	}
}
