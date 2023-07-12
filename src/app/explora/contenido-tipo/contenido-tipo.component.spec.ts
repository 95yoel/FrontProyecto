import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoTipoComponent } from './contenido-tipo.component';

describe('ContenidoTipoComponent', () => {
  let component: ContenidoTipoComponent;
  let fixture: ComponentFixture<ContenidoTipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoTipoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidoTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
