import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-brainstorm',
	templateUrl: './brainstorm.component.html',
	styleUrls: ['./brainstorm.component.scss']
})
export class BrainstormComponent implements OnInit {

	constructor() { }

	// Countdown timers
	public question = localStorage.getItem('writtenQuestion');
	public time = localStorage.getItem('selectedValue');
	public timeMins = parseInt(this.time) - 1;
	public timeSeconds = 60;
	public overallTime = ((this.timeMins + 1 ) * this.timeSeconds);
	public timeIsUp = false;
	public fixedSeconds = 60;
	public position = 'brainstorm';

	public countdownSeconds() {
		let secondsInterval = setInterval(() => {
			this.timeSeconds--;

			if (this.timeSeconds == 0) {
				this.timeSeconds = this.fixedSeconds;
			}
		}, 1000); 	
	}

	public countdownMinutes() {
		let minutesInterval = setInterval(() => {
			this.timeMins--;

			if (this.timeMins == -1) {
				clearInterval(minutesInterval);
				this.timeIsUp = true;
			}
		}, 1000 * this.fixedSeconds);
	}

	public timerVisual() {
		let timer = setInterval(() => {
			let nexStepBtn: HTMLElement = document.getElementById('next-btn') as HTMLElement;	
			this.overallTime--
			
			if (this.overallTime == 0) {
				setTimeout(() => {
					nexStepBtn.click();
				}, 1000);
			}
		}, 1000);
	}

	// Iist of ideas
	public ideasList = [];
	public idea = '';
	public isSecondSession = localStorage.getItem('isSecondSession');
	public nrOfIdeas = 0;
	public oldSession;

	ideaSubmit() {
		this.ideasList.push(this.idea);
		this.idea = '';
		this.nrOfIdeas++;
	}

	getIdeas() {
		localStorage.setItem('listOfIdeas', JSON.stringify(this.ideasList));
		localStorage.setItem('nrOfIdeas', this.nrOfIdeas.toString());
	}

	ngOnInit() {
		localStorage.setItem('position', this.position);

		if (this.isSecondSession == 'true') {
			this.oldSession = JSON.parse(localStorage.getItem('listOfIdeas'));
			
			for (let i = 0; i < this.oldSession.length; i++) {
				this.ideasList.push(this.oldSession[i]);
			}
		}

		let ideaInput: HTMLElement = document.getElementById('idea-input') as HTMLElement;
		ideaInput.focus();

		setTimeout(() => {
			this.countdownSeconds();
			this.countdownMinutes();
			this.timerVisual();
		}, 1000);	

		document.addEventListener('keydown', (event) => {	
			let addBtn: HTMLElement = document.getElementById('add-btn') as HTMLElement;
			let nextBtn: HTMLElement = document.getElementById('next-btn') as HTMLElement;
			let keyCode = event.keyCode;

			if (keyCode == 17) {
				this.ideaSubmit();
			} else if (keyCode == 13) {
				nextBtn.click();
			}
		});
	}
}
