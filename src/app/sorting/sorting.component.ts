import { Component, OnInit } from '@angular/core';
import { identifierModuleUrl } from '../../../node_modules/@angular/compiler';
import { currentId } from 'async_hooks';

@Component({
	selector: 'app-sorting',
	templateUrl: './sorting.component.html',
	styleUrls: ['./sorting.component.scss']
})
export class SortingComponent implements OnInit {

	public question = localStorage.getItem('writtenQuestion');
	public listOfIdeas = localStorage.getItem('listOfIdeas');
	public ideas = JSON.parse(this.listOfIdeas);

	constructor() { }

	ngOnInit() {
		let ideaInput;

		setTimeout(() => {
			ideaInput = document.getElementsByClassName('list-item');
			let inc = 0
			let currentElem = ideaInput[0].children[0];

			currentElem.focus();

			document.addEventListener('keydown', (event) => {	

				if (event.keyCode == 40) { 
					inc++;
					currentElem = ideaInput[inc].children[0];
					currentElem.focus();
				} else if (event.keyCode == 38) {      
					inc--;
					currentElem = ideaInput[inc].children[0];
					currentElem.focus();
				}

				if (inc == ideaInput.length -1) {
					inc--;
				} else if (inc == 0) {
					inc++;
				}
			});
		}, 500);
	}

}
