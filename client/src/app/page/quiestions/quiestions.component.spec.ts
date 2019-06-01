import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuiestionsComponent } from './quiestions.component';

describe('QuiestionsComponent', () => {
  let component: QuiestionsComponent;
  let fixture: ComponentFixture<QuiestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuiestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuiestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
