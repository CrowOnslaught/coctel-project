import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CocktailListPage } from './cocktail-list.page';

describe('CocktailListPage', () => {
  let component: CocktailListPage;
  let fixture: ComponentFixture<CocktailListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocktailListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CocktailListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
