import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailynewsComponent } from './dailynews.component';

describe('DailynewsComponent', () => {
  let component: DailynewsComponent;
  let fixture: ComponentFixture<DailynewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailynewsComponent]
    });
    fixture = TestBed.createComponent(DailynewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
