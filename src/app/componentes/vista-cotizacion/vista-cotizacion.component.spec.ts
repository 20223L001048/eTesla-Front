import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaCotizacionComponent } from './vista-cotizacion.component';

describe('VistaCotizacionComponent', () => {
  let component: VistaCotizacionComponent;
  let fixture: ComponentFixture<VistaCotizacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaCotizacionComponent]
    });
    fixture = TestBed.createComponent(VistaCotizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
