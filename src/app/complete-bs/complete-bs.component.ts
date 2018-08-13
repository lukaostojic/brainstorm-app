import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-complete-bs',
	templateUrl: './complete-bs.component.html',
	styleUrls: ['./complete-bs.component.scss']
})
export class CompleteBsComponent implements OnInit {

	public timeRangeMin = 1;
	public timeRangeMax = 6;
	public selectedValue = 1;
	public question = '';
	public position = 'completeBs';

	getQuestion() {
		localStorage.setItem('writtenQuestion', this.question);
		localStorage.setItem('selectedValue', this.selectedValue.toString());
	}

	constructor() { }

	ngOnInit() {
		localStorage.setItem('position', this.position);

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
