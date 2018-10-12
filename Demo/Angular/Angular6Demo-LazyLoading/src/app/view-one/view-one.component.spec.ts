import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOneComponent } from './view-one.component';

describe('ViewOneComponent', () => {
  let component: ViewOneComponent;
  let fixture: ComponentFixture<ViewOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
