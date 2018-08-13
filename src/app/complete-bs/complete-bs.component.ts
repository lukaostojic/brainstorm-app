import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-complete-bs',
	templateUrl: './complete-bs.component.html',
	styleUrls: ['./complete-bs.component.scss']
})
export class CompleteBsComponent implements OnInit {

	private timeRangeMin = 1;
	private timeRangeMax = 6;
	private selectedValue = 1;
	private question = '';

	getQuestion() {
		localStorage.setItem('writtenQuestion', this.question);
		localStorage.setItem('selectedValue', this.selectedValue.toString());
	}

	constructor() { }

	ngOnInit() {
		document.addEventListener('keydown', (event) => {
			let rSlider: HTMLElement = document.getElementById('range-slider') as HTMLElement;
			let nextBtn: HTMLElement = document.getElementById('next') as HTMLElement;
			let keyCode = event.keyCode;
			
			if (keyCode == 17 && rSlider) {
				rSlider.focus();
			} else if (keyCode == 13 && rSlider && nextBtn) {
				rSlider.blur();
				nextBtn.click();
			}
		});
	}

}
