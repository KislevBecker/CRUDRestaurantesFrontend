import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/api/restaurants';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  getRestaurant() {
    return this.http.get(baseUrl);
  }

  getOneRestaurant(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }

  createRestaurant(data) {
    return this.http.post(baseUrl, data);
  }

  updateRestaurant(id, data) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  deleteRestaurant(id) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll() {
    return this.http.delete(baseUrl);
  }

  findByTitle(name) {
    return this.http.get(`${baseUrl}?name=${name}`);
  }
}
