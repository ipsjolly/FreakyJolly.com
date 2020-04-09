import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScollprogressComponent } from './scollprogress.component';

describe('ScollprogressComponent', () => {
  let component: ScollprogressComponent;
  let fixture: ComponentFixture<ScollprogressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScollprogressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScollprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
