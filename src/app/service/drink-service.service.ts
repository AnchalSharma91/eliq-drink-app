import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DrinkService {
  private apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic';

  constructor(private http: HttpClient) {}

  getDrinks(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getDrinkDetails(id: string): Observable<any> {
      return this.http.get<any>(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    }
  }
