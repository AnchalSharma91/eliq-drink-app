import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinksListComponent } from './components/drinks-list/drinks-list.component';
import { DrinkDetailsComponent } from './components/drink-details/drink-details.component';

export const routes: Routes = [
  { path: '', component: DrinksListComponent },
  { path: 'details/:id', component: DrinkDetailsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
