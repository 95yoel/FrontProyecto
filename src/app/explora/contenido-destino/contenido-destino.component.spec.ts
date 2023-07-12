import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoDestinoComponent } from './contenido-destino.component';

describe('ContenidoDestinoComponent', () => {
  let component: ContenidoDestinoComponent;
  let fixture: ComponentFixture<ContenidoDestinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoDestinoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidoDestinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
