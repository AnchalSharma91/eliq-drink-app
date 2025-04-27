export interface Drink {
    idDrink: string;       
    strDrink: string;      
    strDrinkThumb: string; // URL for the drink's thumbnail image
  }

  export interface DrinkDetails {
    idDrink: string;           
    strDrink: string;          
    strCategory: string;       
    strAlcoholic: string;     
    strGlass: string;         
    strDrinkThumb: string;    
    strInstructions: string;  // Instructions in default language (usually English)
    instructions: string;
    strIngredients: string[]; // Ingredients in an array for cleaner access
  
  }