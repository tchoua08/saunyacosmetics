import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OffrirservicedestinatairechequePage } from './offrirservicedestinatairecheque.page';

describe('OffrirservicedestinatairechequePage', () => {
  let component: OffrirservicedestinatairechequePage;
  let fixture: ComponentFixture<OffrirservicedestinatairechequePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OffrirservicedestinatairechequePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OffrirservicedestinatairechequePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
