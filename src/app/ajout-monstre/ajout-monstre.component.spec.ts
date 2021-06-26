import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutMonstreComponent } from './ajout-monstre.component';

describe('AjoutMonstreComponent', () => {
  let component: AjoutMonstreComponent;
  let fixture: ComponentFixture<AjoutMonstreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutMonstreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutMonstreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
