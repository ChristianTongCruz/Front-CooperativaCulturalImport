import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturasPagesComponent } from './facturas-pages.component';

describe('FacturasPagesComponent', () => {
  let component: FacturasPagesComponent;
  let fixture: ComponentFixture<FacturasPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturasPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturasPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
