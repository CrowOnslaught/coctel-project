import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CocktailApiService } from 'src/app/shared/services/cocktail-api.service';

@Component({
  selector: 'app-create-cocktail',
  templateUrl: './create-cocktail.page.html',
  styleUrls: ['./create-cocktail.page.scss'],
})
export class CreateCocktailPage implements OnInit {

  ingredients: Observable<any>;
  alcoholic:Observable<any>;
  category:Observable<any>;

  ingredientSelected = [];
  alcoholicSelected = '';
  categorySelected = '';

  ingredientNum=1;

  newCocktail : FormGroup;
  photoUrl : string = 'https://redzonekickboxing.com/wp-content/uploads/2017/04/default-image-620x600.jpg';

  constructor(private fb: FormBuilder,private cas : CocktailApiService, private mc : ModalController) 
  {
  }

  ngOnInit() 
  {
    this.ingredients = this.cas.getIngredientsList$()
    .pipe(
      map(e =>
        {
          e.drinks.sort(function(a, b){
            if(a.strIngredient1.toLowerCase() < b.strIngredient1.toLowerCase()) { return -1; }
            if(a.strIngredient1.toLowerCase() > b.strIngredient1.toLowerCase()) { return 1; }
            return 0;
        })
        return e;
        })
    );
    this.alcoholic = this.cas.getAlcoholicList$();
    this.category = this.cas.getCategoriesList$();

    this.group();
  }

  group()
  {
    this.newCocktail = this.fb.group(
      {
        name:['', Validators.required],
        instructions:['', Validators.required],
        alcoholic:['', Validators.required],
        category:['', Validators.required],

        ingredient0:['', Validators.required],
        ingredient1:['', Validators.required],
        ingredient2:['', Validators.required],
        ingredient3:['', Validators.required],
        ingredient4:['', Validators.required],
        ingredient5:['', Validators.required],
        ingredient6:['', Validators.required],
        ingredient7:['', Validators.required],
        ingredient8:['', Validators.required],
        ingredient9:['', Validators.required],
        ingredient10:['', Validators.required],
        ingredient11:['', Validators.required],
        ingredient12:['', Validators.required],
        ingredient13:['', Validators.required],
        ingredient14:['', Validators.required],

        amount0:['', Validators.required],
        amount1:['', Validators.required],
        amount2:['', Validators.required],
        amount3:['', Validators.required],
        amount4:['', Validators.required],
        amount5:['', Validators.required],
        amount6:['', Validators.required],
        amount7:['', Validators.required],
        amount8:['', Validators.required],
        amount9:['', Validators.required],
        amount10:['', Validators.required],
        amount11:['', Validators.required],
        amount12:['', Validators.required],
        amount13:['', Validators.required],
        amount14:['', Validators.required],
      }
    )
  }

  logForm()
  {
    
  }
  close()
  {
    this.mc.dismiss();
  }

  onIngredient()
  {}
  onAlcoholic()
  {}
  onCategory()
  {}

  removeIngredientSelector()
  {
    this.ingredientNum--;
  }
  addIngredientSelector()
  {
    this.ingredientNum++;
  }

  arrayOne(n: number): any[] {
    return Array(15);
  }

  ingredientAlertOptions: any = {
    header: 'Ingredients',
    subHeader: 'Select all your ingredients',
    translucent: false
  };
  alcoholicAlertOptions: any = {
    header: 'Alcoholic',
    subHeader: 'Choose alcoholic or not',
    translucent: false
  };
  categoryAlertOptions: any = {
    header: 'Category',
    subHeader: 'Select a Category',
    translucent: false
  };
}
