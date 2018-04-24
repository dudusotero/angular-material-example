import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoNovoComponent } from './departamento.novo.component';

describe('DepartamentoNovoComponent', () => {
  let component: DepartamentoNovoComponent;
  let fixture: ComponentFixture<DepartamentoNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DepartamentoNovoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartamentoNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
