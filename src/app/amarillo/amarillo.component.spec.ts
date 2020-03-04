import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmarilloComponent } from './amarillo.component';

describe('AmarilloComponent', () => {
  let component: AmarilloComponent;
  let fixture: ComponentFixture<AmarilloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmarilloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmarilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
