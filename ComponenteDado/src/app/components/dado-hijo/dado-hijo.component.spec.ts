import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadoHijoComponent } from './dado-hijo.component';

describe('DadoHijoComponent', () => {
  let component: DadoHijoComponent;
  let fixture: ComponentFixture<DadoHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadoHijoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadoHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
