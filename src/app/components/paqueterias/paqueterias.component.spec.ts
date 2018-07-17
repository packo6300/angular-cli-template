import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaqueteriasComponent } from './paqueterias.component';

describe('PaqueteriasComponent', () => {
  let component: PaqueteriasComponent;
  let fixture: ComponentFixture<PaqueteriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaqueteriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaqueteriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
