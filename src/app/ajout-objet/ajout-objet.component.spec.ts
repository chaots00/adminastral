import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutObjetComponent } from './ajout-objet.component';

describe('AjoutObjetComponent', () => {
  let component: AjoutObjetComponent;
  let fixture: ComponentFixture<AjoutObjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutObjetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutObjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
