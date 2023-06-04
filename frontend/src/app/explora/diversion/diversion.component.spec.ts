import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiversionComponent } from './diversion.component';

describe('DiversionComponent', () => {
  let component: DiversionComponent;
  let fixture: ComponentFixture<DiversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiversionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
