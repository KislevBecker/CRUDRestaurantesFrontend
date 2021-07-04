import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {
  restaurant = {
    name: '',
    logo:'',
    date: '',
    ownerName: '',
    address: '',
    restaurantType: '',
    published: false
  };
  submitted = false;

  constructor(private restautantService: RestaurantService) { }

  ngOnInit() {
  }

  saveRestaurant() {
    const data = {
      name: this.restaurant.name,
      logo:this.restaurant.logo,
      date: this.restaurant.date,
      ownerName: this.restaurant.ownerName,
      address: this.restaurant.address,
      restaurantType: this.restaurant.restaurantType
    };

    this.restautantService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newRestaurant() {
    this.submitted = false;
    this.restaurant = {
      name: '',
      logo:'',
      date: '',
      ownerName: '',
      address: '',
      restaurantType: '',
      published: false
    };
  }

}
