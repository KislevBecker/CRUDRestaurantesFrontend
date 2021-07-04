import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {
  currentRestaurant = null;
  message = '';

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.message = '';
    this.getTutorial(this.route.snapshot.paramMap.get('id'));
  }

  getTutorial(id) {
    this.restaurantService.get(id)
      .subscribe(
        data => {
          this.currentRestaurant = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status) {
    const data = {
      name: this.currentRestaurant.name,
      logo: this.currentRestaurant.logo,
      date: this.currentRestaurant.date,
      ownerName: this.currentRestaurant.ownerName,
      address: this.currentRestaurant.address,
      restaurantType: this.currentRestaurant.restaurantType,
      published: status
    };

    this.restaurantService.update(this.currentRestaurant.id, data)
      .subscribe(
        response => {
          this.currentRestaurant.published = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateRestaurant() {
    this.restaurantService.update(this.currentRestaurant.id, this.currentRestaurant)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The Restaurant was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteRestaurant() {
    this.restaurantService.delete(this.currentRestaurant.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/restaurants']);
        },
        error => {
          console.log(error);
        });
  }
}
