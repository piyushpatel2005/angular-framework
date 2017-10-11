import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Restangular, RestangularModule } from 'ngx-restangular';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { baseURL } from '../shared/baseurl';

import { Dish } from '../shared/dish';

@Injectable()
export class DishService {

  constructor(private restangular: Restangular
              ) { }

  getDishes(): Observable<Dish[]> {
    return this.restangular.all('dishes').getList();
  }

  getDish(id: number): Observable<Dish> {
    return this.restangular.one('dishes', id).get();
  }

  getFeaturedDish(): Observable<Dish> {
    return  this.restangular.all('dishes').getList({featured: true})
      .map(dishes => dishes[0]);
  }

  getDishIds(): Observable<number[]> {
    return this.getDishes()
      .map(dishes => dishes.map(dish => dish.id))
      .catch(error => error);
  }

}
