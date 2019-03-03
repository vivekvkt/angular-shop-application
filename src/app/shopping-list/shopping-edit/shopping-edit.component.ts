import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';

import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { shoppingListService } from '../shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
@ViewChild('f') slForm:NgForm

   subscription: Subscription;
   editMode = false;
   editedItemIndex:number
   editemItem:Ingredient;

  // @ViewChild('nameInput') nameInputRef:ElementRef;
  // @ViewChild('amountInput') amountInputRef:ElementRef;
  // @Output() ingredientAdded = new  EventEmitter<Ingredient>();

  constructor(private slService:shoppingListService) { }

  ngOnInit() {
   this.subscription= this.slService.startedEditing
   .subscribe(
     (index:number)=>{
       this.editedItemIndex=index
       this.editMode= true
       this.editemItem = this.slService.getIngredient(index)
       this.slForm.setValue({
         name: this.editemItem.name,
         amount:this.editemItem.amount
        
       })
     }
   );
  }


  onSubmit(form:NgForm){
    // const ingName = this.nameInputRef.nativeElement.value;
    // const ingAmount = this.amountInputRef.nativeElement.value;
    const  value = form.value;
    const newIgredient = new Ingredient(value.name, value.amount);
    if(this.editMode){
      this.slService.updateIngredient(this.editedItemIndex,newIgredient)
    }else{
      this.slService.addIngredient(newIgredient)

    }
    this.editMode  = false;
    form.reset();
    

    // this.ingredientAdded.emit(newIgredient);
  }

  onclear(){
    this.slForm.reset();
    this.editMode =false;
  }

  onDelete(){
    this.slService.deleteIngredient(this.editedItemIndex)
    this.onclear();
  }
  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

}
