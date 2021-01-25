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

    this.newCocktail = this.fb.group(
      {
        name:['', Validators.required],
        instructions:['', Validators.required],
        ingredient0:['', Validators.required],
        amount0:['', Validators.required],
        alcoholic:['', Validators.required],
        category:['', Validators.required],
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
    return Array(n);
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
