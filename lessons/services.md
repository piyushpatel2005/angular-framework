# Services

Services provide data in the component so that it can be fetched into the views. It makes the component class lean and clean.

- To create service using `angular-cli`:

`ng generate service services/<service-name>`

This will create a folder `servies` and places two files related to given service name.

The `.service.ts` file created has a class that must be declared as `Injectable()`.

- To use the service in the app module, we need to explicitly import the service in `app.module.ts` file at the top and then include in the `providers` array.

```typescript
// app.module.ts file
...
import { Dish
  Service } from './services/dish.service';

... ...

@NgModule({
  ....
  providers: [ DishService ],
  ....
})
export class AppModule { }
```

- We also need to import the service at the top in the component class and then inject the service in the constructor as private property for dependency injection.
- We can instantiate and use service inside `ngOnInit()` life-cycle method which is executed when the object is created.

```typescript
// menu.component.ts file
... ...
import { DishService } from '../services/dish.service';

export class MenuComponent implements OnInit {

  ...
  // provide dependency of the DishService in constructor.
  constructor(private dishService: DishService) { }

  // use service inside ngOnInit() to fetch the data.
  ngOnInit() {
    this.dishes = this.dishService.getDishes();
  }

  ...
}
```
