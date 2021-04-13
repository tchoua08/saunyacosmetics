import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OffrirservicechequecadeauPage } from './offrirservicechequecadeau.page';

describe('OffrirservicechequecadeauPage', () => {
  let component: OffrirservicechequecadeauPage;
  let fixture: ComponentFixture<OffrirservicechequecadeauPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OffrirservicechequecadeauPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OffrirservicechequecadeauPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
