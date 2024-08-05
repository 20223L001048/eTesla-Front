import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarReportesComponent } from './generar-reportes.component';

describe('GenerarReportesComponent', () => {
  let component: GenerarReportesComponent;
  let fixture: ComponentFixture<GenerarReportesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerarReportesComponent]
    });
    fixture = TestBed.createComponent(GenerarReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
