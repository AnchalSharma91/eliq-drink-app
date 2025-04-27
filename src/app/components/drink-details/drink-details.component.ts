import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DrinkService } from '../../service/drink-service.service';
import { DrinkDetails } from '../../models/drinks.interface';

@Component({
  selector: 'app-drink-details',
  templateUrl: './drink-details.component.html',
  styleUrl: './drink-details.component.css'
})
export class DrinkDetailsComponent {
  drink!: DrinkDetails;;
  ingredients: string[] = [];

  constructor(private route: ActivatedRoute, 
              private http: HttpClient, 
              private drinkService: DrinkService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id') || '';
      this.getDrinkDetails(id);
    })
  }

  getDrinkDetails(id:string){
    this.drinkService.getDrinkDetails(id).subscribe((res) => {
      this.drink = res.drinks[0];
      this.drink.instructions = this.drink.strInstructions; 
      Object.keys(this.drink).forEach((key) => {
       // Check if the key is a strIngredient key
       if (key.startsWith('strIngredient')) {
         const ingredient = this.drink[key as keyof DrinkDetails];
     
         if (typeof ingredient === 'string' && ingredient) {
           this.ingredients.push(ingredient);
         }
       }
     });
   })
  }
}
