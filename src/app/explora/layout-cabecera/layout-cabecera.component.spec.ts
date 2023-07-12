import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutCabeceraComponent } from './layout-cabecera.component';

describe('LayoutCabeceraComponent', () => {
  let component: LayoutCabeceraComponent;
  let fixture: ComponentFixture<LayoutCabeceraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutCabeceraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutCabeceraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
