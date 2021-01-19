import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YourCocktailsPage } from './your-cocktails.page';

describe('YourCocktailsPage', () => {
  let component: YourCocktailsPage;
  let fixture: ComponentFixture<YourCocktailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourCocktailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YourCocktailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
