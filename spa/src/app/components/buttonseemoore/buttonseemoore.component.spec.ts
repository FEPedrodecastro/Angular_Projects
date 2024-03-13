import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonseemooreComponent } from './buttonseemoore.component';

describe('ButtonseemooreComponent', () => {
  let component: ButtonseemooreComponent;
  let fixture: ComponentFixture<ButtonseemooreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonseemooreComponent]
    });
    fixture = TestBed.createComponent(ButtonseemooreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
