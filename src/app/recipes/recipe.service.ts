
import {  Injectable} from '@angular/core'
import { Subject } from 'rxjs/Subject';

import {Recipe} from './recipe.model'
import { Ingredient } from '../shared/ingredient.model';
import { shoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()

export class RecipeService{
    recipesChanged = new Subject<Recipe[]>();

    // recipeSelected =  new EventEmitter<Recipe>();

   private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test',
         'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',[
             new  Ingredient('Meat', 1),
             new Ingredient('french', 3)
         ]),
        new Recipe('Other Recipe', 
        'This is simply a test', 
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',[
            new Ingredient('bonus', 4),
            new Ingredient('Meat', 2)

        ])
      ];

      constructor(private slService:shoppingListService){}

      setRecipes(recipes:Recipe[]){
          this.recipes = recipes;
          this.recipesChanged.next(this.recipes.slice());
      }

      getRecipes(){
          return this.recipes.slice();

      }
      getRecipe(index:number){
          return this.recipes[index]
      }

       addIngredientsToShoppingList(ingredients:Ingredient[]){
           this.slService.addIngredients(ingredients);

       }

       addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }
    
      updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }
    
      deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
      }



}