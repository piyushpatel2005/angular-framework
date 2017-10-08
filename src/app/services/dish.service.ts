import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { baseURL } from '../shared/baseurl';
import { ProcessHttpmsgService } from './process-httpmsg.service';

import { Dish } from '../shared/dish';

@Injectable()
export class DishService {

  constructor(private http: Http,
              private processHttpmsgService: ProcessHttpmsgService,
              ) { }

  getDishes(): Observable<Dish[]> {
    return this.http.get(baseURL + 'dishes')
                    .map(res => { return this.processHttpmsgService.extractData(res); });
  }

  getDish(id: number): Observable<Dish> {
    return this.http.get(baseURL + 'dishes/' + id)
      .map(res => this.processHttpmsgService.extractData(res));
  }

  getFeaturedDish(): Observable<Dish> {
    return  this.http.get(baseURL + 'dishes?featured=true')
      .map(res => this.processHttpmsgService.extractData(res)[0]);
  }

  getDishIds(): Observable<number[]> {
    return this.getDishes()
      .map(dishes => dishes.map(dish => dish.id));
  }

}
