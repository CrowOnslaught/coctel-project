import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateCocktailPage } from './create-cocktail.page';

describe('CreateCocktailPage', () => {
  let component: CreateCocktailPage;
  let fixture: ComponentFixture<CreateCocktailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCocktailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCocktailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
