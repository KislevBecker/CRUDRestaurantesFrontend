import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantsListComponent implements OnInit {

  restaurants: any;
  currentRestaurant = null;
  currentIndex = -1;
  name = '';

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.retrieveRestaurants();
  }

  retrieveRestaurants() {
    this.restaurantService.getAll()
      .subscribe(
        data => {
          this.restaurants = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrieveRestaurants();
    this.currentRestaurant = null;
    this.currentIndex = -1;
  }

  setActiveRestaurants(restaurants, index) {
    this.currentRestaurant = restaurants;
    this.currentIndex = index;
  }

  removeAllRestaurants() {
    this.restaurantService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchName() {
    this.restaurantService.findByTitle(this.name)
      .subscribe(
        data => {
          this.restaurants = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
