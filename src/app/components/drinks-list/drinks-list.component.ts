import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Drink } from '../../models/drinks.interface';
import { DrinkService } from '../../service/drink-service.service';
import { Subscription } from 'rxjs';
import { SearchService } from '../../service/search-service';

@Component({
  selector: 'app-drinks-list',
  templateUrl: './drinks-list.component.html',
  styleUrl: './drinks-list.component.css'
})
export class DrinksListComponent {
  private searchTermSubscription!: Subscription;
  searchTerm: string = '';
  drinks: Drink[] = [];
  filteredDrinks: Drink[] = [];

  constructor(private router: Router, 
              private http: HttpClient, 
              private drinkService: DrinkService,
              private searchService: SearchService) {}

  ngOnInit() {
    this.searchTermSubscription = this.searchService.searchTerm$.subscribe(term => {
      this.searchTerm = term;
      this.filterDrinks();
    });
    this.drinkService.getDrinks().subscribe((res) => {
       this.drinks = res.drinks;
       this.filteredDrinks = res.drinks; // Initialize filtered drinks with all drinks
     });
  }

  //open details page
  openDetails(id: string) {
    this.router.navigate(['/details', id]);
  }

  // Filter drinks based on search term
   filterDrinks() {
     this.filteredDrinks = this.drinks.filter(drink =>
       drink.strDrink.toLowerCase().includes(this.searchTerm.toLowerCase())
     );
     
   }
}
