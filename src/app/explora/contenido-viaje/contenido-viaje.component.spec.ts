import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoViajeComponent } from './contenido-viaje.component';

describe('ContenidoViajeComponent', () => {
  let component: ContenidoViajeComponent;
  let fixture: ComponentFixture<ContenidoViajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoViajeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidoViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
