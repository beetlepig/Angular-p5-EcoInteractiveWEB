import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlechasComponent } from './flechas.component';

describe('FlechasComponent', () => {
  let component: FlechasComponent;
  let fixture: ComponentFixture<FlechasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlechasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlechasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
