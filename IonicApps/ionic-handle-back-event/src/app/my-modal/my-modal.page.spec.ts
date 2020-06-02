import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyModalPage } from './my-modal.page';

describe('MyModalPage', () => {
  let component: MyModalPage;
  let fixture: ComponentFixture<MyModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
