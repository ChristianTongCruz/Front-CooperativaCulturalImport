import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiasLayoutComponent } from './guias-layout.component';

describe('GuiasLayoutComponent', () => {
  let component: GuiasLayoutComponent;
  let fixture: ComponentFixture<GuiasLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuiasLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuiasLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
