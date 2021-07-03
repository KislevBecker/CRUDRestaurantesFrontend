import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';


//import { AddRestaurantComponent } from './add-restaurant.component';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})

export class AddRestaurantComponent implements OnInit {
  restaurant = {
    name: '',
    logo: '',
    date: '',
    ownerName: '',
    address: '',
    restaurantType: '',
    published: false
  };
  submitted = false;

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
  }

  saveRestaurant() {
    const data = {
      name: this.restaurant.name,
      logo: this.restaurant.logo,
      date: this.restaurant.date,
      ownerName: this.restaurant.ownerName,
      address: this.restaurant.address,
      restaurantType: this.restaurant.restaurantType,
      published: false
    };

    this.restaurantService.create(data)
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
      logo: '',
      date: '',
      ownerName: '',
      address: '',
      restaurantType: '',
      published: false
    };
  }
}



// describe('AddRestaurantComponent', () => {
//   let component: AddRestaurantComponent;
//   let fixture: ComponentFixture<AddRestaurantComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ AddRestaurantComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(AddRestaurantComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
