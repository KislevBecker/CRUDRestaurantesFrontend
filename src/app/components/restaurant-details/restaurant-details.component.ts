import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { RestaurantTypeService } from 'src/app/services/restaurant-type.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { MenuService } from 'src/app/services/menu.service';


@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['../../app.component.css']
})
export class RestaurantDetailsComponent implements OnInit {
  currentRestaurant = null;
  currentRestaurantType = null;
  currentMenu= null;
  message = '';

  constructor(
    private restaurantService: RestaurantService,
    private restaurantTypeService: RestaurantTypeService,
    private menuService: MenuService,
    private route: ActivatedRoute,
    private router: Router) { }


    dropdownList = [];
    dropdownList2 = [];
    selectedItems = [];
    selectedItems2 = [];
    dropdownSettings: IDropdownSettings;
    dropdown2Settings: IDropdownSettings;
  ngOnInit() {
    this.message = '';
    this.getRestaurant(this.route.snapshot.paramMap.get('id'));
    this.getRestaurantType();
    this.getMenu(this.route.snapshot.paramMap.get('id'));


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
  

  getRestaurant(id) {
    this.restaurantService.getOneRestaurant(id)
      .subscribe(
        data => {
          this.currentRestaurant = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


  getRestaurantType() {
    this.restaurantTypeService.getRestaurantTypes()
      .subscribe(
        data => {
          this.currentRestaurantType = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  getMenu(typeid) {
    this.menuService.getMenu()
    .subscribe(
      data => {
        this.currentMenu = data;
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
      datePublish: this.currentRestaurant.datePublish,
      ownerName: this.currentRestaurant.ownerName,
      addressRestaurant: this.currentRestaurant.addressRestaurant,
      restaurantType: this.currentRestaurant.restaurantType,
      published: status
    };

    this.restaurantService.updateRestaurant(this.currentRestaurant.id, data)
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
    this.restaurantService.updateRestaurant(this.currentRestaurant.id, this.currentRestaurant)
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
    this.restaurantService.deleteRestaurant(this.currentRestaurant.id)
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
