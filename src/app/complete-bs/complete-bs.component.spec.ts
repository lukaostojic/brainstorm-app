import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteBsComponent } from './complete-bs.component';

describe('CompleteBsComponent', () => {
  let component: CompleteBsComponent;
  let fixture: ComponentFixture<CompleteBsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteBsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteBsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
