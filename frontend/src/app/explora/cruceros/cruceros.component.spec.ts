import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrucerosComponent } from './cruceros.component';

describe('CrucerosComponent', () => {
  let component: CrucerosComponent;
  let fixture: ComponentFixture<CrucerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrucerosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrucerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
