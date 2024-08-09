import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleIndustriaComponent } from './detalle-industria.component';

describe('DetalleIndustriaComponent', () => {
  let component: DetalleIndustriaComponent;
  let fixture: ComponentFixture<DetalleIndustriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleIndustriaComponent]
    });
    fixture = TestBed.createComponent(DetalleIndustriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
