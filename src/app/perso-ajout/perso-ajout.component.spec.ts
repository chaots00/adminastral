import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersoAjoutComponent } from './perso-ajout.component';

describe('PersoAjoutComponent', () => {
  let component: PersoAjoutComponent;
  let fixture: ComponentFixture<PersoAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersoAjoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersoAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
