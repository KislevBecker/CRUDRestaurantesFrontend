import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { RestaurantDetailsComponent } from './components/restaurant-details/restaurant-details.component';
import { AddRestaurantComponent } from './components/add-restaurant/add-restaurant.component';

const routes: Routes = [
  { path: '', redirectTo: 'restaurants', pathMatch: 'full' },
  { path: 'restaurantes', component: RestaurantListComponent },
  { path: 'restaurantes/:id', component: RestaurantDetailsComponent },
  { path: 'add', component: AddRestaurantComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
