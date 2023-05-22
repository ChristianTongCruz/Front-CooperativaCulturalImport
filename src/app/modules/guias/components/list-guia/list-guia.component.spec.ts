import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGuiaComponent } from './list-guia.component';

describe('ListGuiaComponent', () => {
  let component: ListGuiaComponent;
  let fixture: ComponentFixture<ListGuiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGuiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListGuiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
