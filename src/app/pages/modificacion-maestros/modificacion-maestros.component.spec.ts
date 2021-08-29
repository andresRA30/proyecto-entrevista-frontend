import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificacionMaestrosComponent } from './modificacion-maestros.component';

describe('ModificacionMaestrosComponent', () => {
  let component: ModificacionMaestrosComponent;
  let fixture: ComponentFixture<ModificacionMaestrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificacionMaestrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificacionMaestrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
