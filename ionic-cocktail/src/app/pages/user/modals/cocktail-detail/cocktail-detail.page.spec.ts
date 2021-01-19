import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CocktailDetailPage } from './cocktail-detail.page';

describe('CocktailDetailPage', () => {
  let component: CocktailDetailPage;
  let fixture: ComponentFixture<CocktailDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocktailDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CocktailDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
