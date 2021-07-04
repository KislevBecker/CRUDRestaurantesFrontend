import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantsListComponent } from './components/restaurants-list/restaurants-list.component';
import { RestaurantDetailsComponent } from './components/restaurant-details/restaurant-details.component';
import { AddRestaurantComponent } from './components/add-restaurant/add-restaurant.component';

const routes: Routes = [
  { path: '', redirectTo: 'restaurants', pathMatch: 'full' },
  { path: 'restaurants', component: RestaurantsListComponent },
  { path: 'restaurants/:id', component: RestaurantDetailsComponent },
  { path: 'add', component: AddRestaurantComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
