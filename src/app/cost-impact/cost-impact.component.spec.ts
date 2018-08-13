import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostImpactComponent } from './cost-impact.component';

describe('CostImpactComponent', () => {
  let component: CostImpactComponent;
  let fixture: ComponentFixture<CostImpactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostImpactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostImpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
