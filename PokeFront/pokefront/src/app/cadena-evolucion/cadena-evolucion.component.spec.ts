import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadenaEvolucionComponent } from './cadena-evolucion.component';

describe('CadenaEvolucionComponent', () => {
  let component: CadenaEvolucionComponent;
  let fixture: ComponentFixture<CadenaEvolucionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadenaEvolucionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadenaEvolucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
