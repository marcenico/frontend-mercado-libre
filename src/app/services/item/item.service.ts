import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as ENVIROMENT } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  apiUrl = ENVIROMENT.apiUrl;
  categories: string[] = [];

  constructor(
    private http: HttpClient,
  ) { }

  getById(id: any) {
    return this.http.get(`${this.apiUrl}/items/${id}`);
  }

  getItems(query: any) {
    return this.http.get(`${this.apiUrl}/items?q=${query}`);
  }
}
