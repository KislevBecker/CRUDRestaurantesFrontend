import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { RestaurantTypeService } from 'src/app/services/restaurant-type.service';
import { MenuService } from 'src/app/services/menu.service';

import { IDropdownSettings } from 'ng-multiselect-dropdown';


@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['../../app.component.css']
})
export class AddRestaurantComponent implements OnInit {
  restaurant = {
    name: '',
    logo:'',
    datePublish: '',
    ownerName: '',
    addressRestaurant: '',
    restaurantType: '',
    published: false
  };
  submitted = false;

  constructor(private restautantService: RestaurantService, private restaurantType: RestaurantTypeService, private menu: MenuService) { }

  dropdownList = [];
  dropdownList2 = [];
  selectedItems = [];
  selectedItems2 = [];
  dropdownSettings: IDropdownSettings;
  dropdown2Settings: IDropdownSettings;
  other:`html.push("<input type='text' name='name'>")`;


  ngOnInit() {
    // this.dropdownList = this.restaurantType.getAll;
    // this.dropdownList2  = this.menu.getAll;

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Seleccionar todos',
      unSelectAllText: 'Eliminar todas las selecciones',
      searchPlaceholderText: 'Buscar',
      noDataAvailablePlaceholderText: 'Dato no disponible',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    
    this.dropdown2Settings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Seleccionar todos',
      unSelectAllText: 'Eliminar todas las selecciones',
      searchPlaceholderText: 'Buscar',
      noDataAvailablePlaceholderText: 'Dato no disponible',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  onItem2Select(item: any) {
    console.log(item);
  }
  onSelect2All(items: any) {
    console.log(items);
  }

  saveRestaurant() {
    const data = {
      name: this.restaurant.name,
      logo:this.restaurant.logo,
      datePublish: this.restaurant.datePublish,
      ownerName: this.restaurant.ownerName,
      addressRestaurant: this.restaurant.addressRestaurant,
      restaurantType: this.restaurant.restaurantType
    };

    this.restautantService.createRestaurant(data)
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
      datePublish: '',
      ownerName: '',
      addressRestaurant: '',
      restaurantType: '',
      published: false
    };
  }

}
