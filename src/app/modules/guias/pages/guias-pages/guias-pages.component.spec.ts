import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiasPagesComponent } from './guias-pages.component';

describe('GuiasPagesComponent', () => {
  let component: GuiasPagesComponent;
  let fixture: ComponentFixture<GuiasPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuiasPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuiasPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
