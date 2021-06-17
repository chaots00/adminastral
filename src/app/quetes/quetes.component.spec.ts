import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuetesComponent } from './quetes.component';

describe('QuetesComponent', () => {
  let component: QuetesComponent;
  let fixture: ComponentFixture<QuetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuetesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
