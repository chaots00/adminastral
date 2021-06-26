import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutQueComponent } from './ajout-que.component';

describe('AjoutQueComponent', () => {
  let component: AjoutQueComponent;
  let fixture: ComponentFixture<AjoutQueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutQueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutQueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
