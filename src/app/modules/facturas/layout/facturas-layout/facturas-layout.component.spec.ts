import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturasLayoutComponent } from './facturas-layout.component';

describe('FacturasLayoutComponent', () => {
  let component: FacturasLayoutComponent;
  let fixture: ComponentFixture<FacturasLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturasLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturasLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
