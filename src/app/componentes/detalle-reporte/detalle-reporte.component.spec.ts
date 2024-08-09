import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleReporteComponent } from './detalle-reporte.component';

describe('DetalleReporteComponent', () => {
  let component: DetalleReporteComponent;
  let fixture: ComponentFixture<DetalleReporteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleReporteComponent]
    });
    fixture = TestBed.createComponent(DetalleReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
