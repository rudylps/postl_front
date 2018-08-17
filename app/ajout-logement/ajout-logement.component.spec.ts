import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutLogementComponent } from './ajout-logement.component';

describe('AjoutLogementComponent', () => {
  let component: AjoutLogementComponent;
  let fixture: ComponentFixture<AjoutLogementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutLogementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutLogementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
