import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-results',
	templateUrl: './results.component.html',
	styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

	public time = localStorage.getItem('selectedValue');
	public timeMins = parseInt(this.time);
	public listOfIdeas = localStorage.getItem('listOfIdeas');
	public ideas = JSON.parse(this.listOfIdeas);
	public ideasArr = this.ideas.length;
	public ideaPerMinute = this.ideasArr / this.timeMins;
	public isSecondSession = false;

	addOneMinute() {
		localStorage.setItem('selectedValue', '1');
		localStorage.setItem('listOfIdeas', this.listOfIdeas);
	}

	constructor() { }

	ngOnInit() {
		document.addEventListener('keydown', (event) => {	
			let yesBtn: HTMLElement = document.getElementById('yes') as HTMLElement;
			let noBtn: HTMLElement = document.getElementById('no') as HTMLElement;
			let nextBtn: HTMLElement = document.getElementById('next-btn') as HTMLElement;
			let keyName = event.key;
			let keyCode = event.keyCode;

			if (keyName == 'y') {
				this.isSecondSession = true;
				localStorage.setItem('isSecondSession', this.isSecondSession.toString());
				yesBtn.click();
			} else if (keyName == 'n') {
				noBtn.click();
			} else if (keyCode == 13) {
				nextBtn.click();
			}
		});
	}

}
