import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleResidenciaComponent } from './detalle-residencia.component';

describe('DetalleResidenciaComponent', () => {
  let component: DetalleResidenciaComponent;
  let fixture: ComponentFixture<DetalleResidenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleResidenciaComponent]
    });
    fixture = TestBed.createComponent(DetalleResidenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
