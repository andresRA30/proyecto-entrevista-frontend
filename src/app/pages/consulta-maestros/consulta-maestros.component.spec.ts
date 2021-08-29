import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaMaestrosComponent } from './consulta-maestros.component';

describe('ConsultaMaestrosComponent', () => {
  let component: ConsultaMaestrosComponent;
  let fixture: ComponentFixture<ConsultaMaestrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaMaestrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaMaestrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
