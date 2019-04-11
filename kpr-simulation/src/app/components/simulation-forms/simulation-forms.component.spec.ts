import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationFormsComponent } from './simulation-forms.component';

describe('SimulationFormsComponent', () => {
  let component: SimulationFormsComponent;
  let fixture: ComponentFixture<SimulationFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimulationFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulationFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
