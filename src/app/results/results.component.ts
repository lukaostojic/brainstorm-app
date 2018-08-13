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
	public nrOfIdeasS = localStorage.getItem('nrOfIdeas');
	public nrOfIdeasN = parseInt(this.nrOfIdeasS);
	public ideaPerMinute = this.nrOfIdeasN / this.timeMins;
	public isSecondSession = false;
	public position = 'results';

	addOneMinute() {
		this.isSecondSession = true;
		localStorage.setItem('selectedValue', '1');
		localStorage.setItem('isSecondSession', this.isSecondSession.toString());
	}

	constructor() { }

	ngOnInit() {
		localStorage.setItem('position', this.position);

		document.addEventListener('keydown', (event) => {	
			let yesBtn: HTMLElement = document.getElementById('yes') as HTMLElement;
			let noBtn: HTMLElement = document.getElementById('no') as HTMLElement;
			let nextBtn: HTMLElement = document.getElementById('next-btn') as HTMLElement;
			let keyName = event.key;
			let keyCode = event.keyCode;

			if (keyName == 'y' && yesBtn) {
				this.addOneMinute();
				yesBtn.click();
			} else if (keyName == 'n' && noBtn) {
				noBtn.click();
			} else if (keyCode == 13 && nextBtn) {
				nextBtn.click();
			}
		});
	}

}
