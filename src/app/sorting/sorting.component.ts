import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-sorting',
	templateUrl: './sorting.component.html',
	styleUrls: ['./sorting.component.scss']
})
export class SortingComponent implements OnInit {

	public listOfIdeas = localStorage.getItem('listOfIdeas');
	public ideas = JSON.parse(this.listOfIdeas);

	constructor() { }

	ngOnInit() {
	}

}
