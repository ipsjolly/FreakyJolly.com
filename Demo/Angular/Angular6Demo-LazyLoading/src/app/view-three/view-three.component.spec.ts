import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewThreeComponent } from './view-three.component';

describe('ViewThreeComponent', () => {
  let component: ViewThreeComponent;
  let fixture: ComponentFixture<ViewThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
