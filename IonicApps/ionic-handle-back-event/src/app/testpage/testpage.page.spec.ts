import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestpagePage } from './testpage.page';

describe('TestpagePage', () => {
  let component: TestpagePage;
  let fixture: ComponentFixture<TestpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestpagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
