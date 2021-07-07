import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/api/restaurantTypes';



@Injectable({
  providedIn: 'root'
})
export class RestaurantTypeService {


  constructor(private http: HttpClient) { }

  getRestaurantTypes() {
    return this.http.get(baseUrl);
  }

  getOneRestaurantTypes(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }

  createRestaurantTypes(data) {
    return this.http.post(baseUrl, data);
  }

}