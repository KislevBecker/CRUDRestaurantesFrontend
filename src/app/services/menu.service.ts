import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/api/menu';



@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  getMenu() {
    return this.http.get(baseUrl);
  }

  getOneMenu(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }

  createMenu(data) {
    return this.http.post(baseUrl, data);
  }

}
