import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TablinksPage } from './tablinks.page';

describe('TablinksPage', () => {
  let component: TablinksPage;
  let fixture: ComponentFixture<TablinksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablinksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TablinksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
