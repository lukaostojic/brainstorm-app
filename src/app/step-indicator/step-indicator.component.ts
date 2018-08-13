import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-step-indicator',
	templateUrl: './step-indicator.component.html',
	styleUrls: ['./step-indicator.component.scss']
})
export class StepIndicatorComponent implements OnInit {

	public position = localStorage.getItem('position');

	constructor() { }

	ngOnInit() {
		// function checkPosition() {
		// 	setTimeout(() => {
		// 		this.position = localStorage.getItem('position');
		// 	}, 250);
		// }

		document.addEventListener('keydown', (event) => {
			// checkPosition();
			setTimeout(() => {
				this.position = localStorage.getItem('position');
			}, 250);
		});

		document.addEventListener('click', (event) => {	
			// checkPosition();
			setTimeout(() => {
				this.position = localStorage.getItem('position');
			}, 250);
		});
				
	}

}
