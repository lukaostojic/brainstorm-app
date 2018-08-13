import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-intro',
	templateUrl: './intro.component.html',
	styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		localStorage.clear();

		document.addEventListener('keydown', (event) => {
			let completeBs: HTMLElement = document.getElementById('complete') as HTMLElement;
			let quickBs: HTMLElement = document.getElementById('quick') as HTMLElement;
			let keyName = event.key;
			
			if (keyName == 'c' && completeBs) {
				completeBs.click();
			} else if (keyName == 'q' && quickBs) {
				quickBs.click();
			}
		});
	}

}
