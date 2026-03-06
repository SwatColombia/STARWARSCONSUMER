import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Series, SeriesResponse } from '../models/series';



@Injectable({
  providedIn: 'root',
})
 
export class ApiConsumerService {


series : Series[] = [];

  private apiUrl = 'https://swapi.dev/api/films/'; // Cambia esta URL por la de tu API
  
  constructor(private http: HttpClient) { 

    console.log('ApiConsumerService initialized');
  }

  getSeries() {
      return this.http.get<SeriesResponse>(this.apiUrl);
  }
  
  
}

