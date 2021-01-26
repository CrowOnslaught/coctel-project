import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cocktail } from 'src/app/shared/model/cocktail';
import { CocktailApiService } from 'src/app/shared/services/cocktail-api.service';
import { LocalCocktailsService } from 'src/app/shared/services/local-cocktails.service';
import { PhotoService } from 'src/app/shared/services/photo/photo.service';

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
  photoUrl :string = /*: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(*/'https://redzonekickboxing.com/wp-content/uploads/2017/04/default-image-620x600.jpg'/*)*/;

  constructor(/*private sanitizer: DomSanitizer, */private lc: LocalCocktailsService, private photoService: PhotoService, private fb: FormBuilder,private cas : CocktailApiService, private mc : ModalController) 
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
        image:[this.photoUrl],

        ingredient0:[null, Validators.required],
        ingredient1:[null],
        ingredient2:[null],
        ingredient3:[null],
        ingredient4:[null],
        ingredient5:[null],
        ingredient6:[null],
        ingredient7:[null],
        ingredient8:[null],
        ingredient9:[null],
        ingredient10:[null],
        ingredient11:[null],
        ingredient12:[null],
        ingredient13:[null],
        ingredient14:[null],

        amount0:[null, Validators.required],
        amount1:[null],
        amount2:[null],
        amount3:[null],
        amount4:[null],
        amount5:[null],
        amount6:[null],
        amount7:[null],
        amount8:[null],
        amount9:[null],
        amount10:[null],
        amount11:[null],
        amount12:[null],
        amount13:[null],
        amount14:[null],
      }
    )
  }

  logForm()
  {
    let l_cocktail : Cocktail = new Cocktail(this.newCocktail);
    console.log(l_cocktail);

    this.lc.setCocktail(l_cocktail);
    this.mc.dismiss();
  }
  close()
  {
    this.mc.dismiss();
  }

  onIngredient()
  {
  }
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


  addPhotoToGallery() {
    let image = this.photoService.addNewToGallery();
    image.then(data => 
      {
        //let l_safeUrl= this.sanitizer.bypassSecurityTrustUrl(data);
        this.photoUrl = data;//l_safeUrl;
        this.newCocktail.get("image").setValue(this.photoUrl);   
      });
  }

  arrayOne(n: number): any[] {
    return Array(15);
  }

  ingredientAlertOptions: any = {
    header: 'Ingredients',
    subHeader: 'Select an ingredients',
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
