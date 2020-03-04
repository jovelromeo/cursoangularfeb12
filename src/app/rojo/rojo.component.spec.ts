import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RojoComponent } from './rojo.component';

describe('RojoComponent', () => {
  let component: RojoComponent;
  let fixture: ComponentFixture<RojoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RojoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RojoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
