import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroComponent } from './intro/intro.component';
import { CompleteBsComponent } from './complete-bs/complete-bs.component';
import { BrainstormComponent } from './brainstorm/brainstorm.component';
import { ResultsComponent } from './results/results.component';
import { SortingComponent } from './sorting/sorting.component';

const routes: Routes = [
	{ path: '', redirectTo: '/intro', pathMatch: 'full' },
	{ path: 'intro', component: IntroComponent },
	{ path: 'complete-bs', component: CompleteBsComponent },
	{ path: 'brainstorm', component: BrainstormComponent },
	{ path: 'results', component: ResultsComponent },
	{ path: 'sorting', component: SortingComponent },
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [ RouterModule ]
})

export class AppRoutingModule { }
