import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprobarCotizacionComponent } from './aprobar-cotizacion.component';

describe('AprobarCotizacionComponent', () => {
  let component: AprobarCotizacionComponent;
  let fixture: ComponentFixture<AprobarCotizacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AprobarCotizacionComponent]
    });
    fixture = TestBed.createComponent(AprobarCotizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
