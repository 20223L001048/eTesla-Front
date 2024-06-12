import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelVentasComponent } from './panel-ventas.component';

describe('PanelVentasComponent', () => {
  let component: PanelVentasComponent;
  let fixture: ComponentFixture<PanelVentasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelVentasComponent]
    });
    fixture = TestBed.createComponent(PanelVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
