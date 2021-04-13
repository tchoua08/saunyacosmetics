import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabAttributePage } from './tab-attribute.page';

describe('TabAttributePage', () => {
  let component: TabAttributePage;
  let fixture: ComponentFixture<TabAttributePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabAttributePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabAttributePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
