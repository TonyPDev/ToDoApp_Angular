import { Injectable } from '@angular/core';

@Injectable()
export class ToDoService {
	//toDos: string[];
	toDos = ['1st test','2nd test','3rd test'];

	getToDos(): Promise<string[]> {
		return new Promise(resolve => {
			resolve();
		});
	}

	create(item: string): void {
		this.toDos.push(item);
	}
}
