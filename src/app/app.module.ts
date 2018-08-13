import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StepIndicatorComponent } from './step-indicator/step-indicator.component';
import { IntroComponent } from './intro/intro.component';
import { CompleteBsComponent } from './complete-bs/complete-bs.component';
import { BrainstormComponent } from './brainstorm/brainstorm.component';
import { ResultsComponent } from './results/results.component';
import { SortingComponent } from './sorting/sorting.component';

@NgModule({
	declarations: [
		AppComponent,
		StepIndicatorComponent,
		IntroComponent,
		CompleteBsComponent,
		BrainstormComponent,
		ResultsComponent,
		SortingComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
