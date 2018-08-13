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
	public position = 'sorting';

	constructor() { }

	ngOnInit() {
		localStorage.setItem('position', this.position);

		let ideaInput;
		let nextBtn: HTMLElement = document.getElementById('next-btn') as HTMLElement;

		setTimeout(() => {
			ideaInput = document.getElementsByClassName('list-item');
			let inc = 0
			let currentElem = ideaInput[0].children[0];

			currentElem.focus();

			document.addEventListener('keydown', (event) => {
				let keyCode = event.keyCode;	

				if (keyCode == 40 && currentElem) { 
					inc++;
					currentElem = ideaInput[inc].children[0];
					currentElem.focus();
				} else if (keyCode == 38 && currentElem) {      
					inc--;
					currentElem = ideaInput[inc].children[0];
					currentElem.focus();
				} else if (keyCode == 13) {
					nextBtn.click();
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
