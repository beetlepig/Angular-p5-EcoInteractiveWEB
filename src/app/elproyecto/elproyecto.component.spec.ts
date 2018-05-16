import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElproyectoComponent } from './elproyecto.component';

describe('ElproyectoComponent', () => {
  let component: ElproyectoComponent;
  let fixture: ComponentFixture<ElproyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElproyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElproyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
