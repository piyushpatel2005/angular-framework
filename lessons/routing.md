# Routing in Angular

Routing provides Angular application to show different component views based on the url. It provides the ability to use different urls even without page reload.

Routing can be added as a separate module.

- Generate module using `angular-cli`:

`ng generate module <module-name>`

`ng generate module app-routing`

This creates only one file in folder `app-routing` as `app-routing.module.ts` file.

We can create routes as a separate module. It is not a rule, but recommneded. We can also include the same code inside `app-routing.module.ts` file. Here, the separate file is name `routes.ts`.

```typescript
// routes.ts file
import { Routes } from '@angular/router';
// import different components for routing
import { HomeComponent } from '../home/home.component';
import { MenuComponent } from '../menu/menu.component';

... ...
// export routes
export const routes: Routes = [
// array of different route objects with path and component properties
  {path: 'home', component: HomeComponent },
  {path: 'menu', component: MenuComponent },
  // default route - when home page is requested, it redirects to this route.
  // http://localhost:4200 will be redirected to http://localhost;4200/home
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];
// Note: path property does not include preceding '/'
```

Now, this routes can be imported into `app-routing.module.ts` to configure routes.

```typescript
// app-routing.module.ts file
... ...
import { RouterModule, Routes } from '@angular/router';

import { routes } from './routes';


@NgModule({
  imports: [
    ...
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
```

- To get different routes in the view, add `<router-outlet></router-outlet>` element in `app.component.html` file. This will be replaced by different views depending on the route.

- To use the `app-routing` module in the app, update the `app.module.ts` file.

```typescript
// app.module.ts file
... ...
import { AppRoutingModule } from '../app-routing/app-routing.module.ts';
@NgModule({
  ....
  imports [
    ....
    AppRoutingModule
  ],
  .... ...
})
....
```

- To create hyperlinks, use `routerLink` attribute.

```html
<a routerLink="/home">Home</a>
```

- We can also apply `routerLinkActive` attribute to links and set it equal to a class that will be applied when this view is active.

```html
<a routerLink="/home" routerLinkActive="active">Home</a>
<a routerLink="/menu" routerLinkActive="active">Menu</a>
<!-- CSS stylesheet will have active class styles to make it appear as active -->
```

- We can also add router parameters using `dishdetail/:id` syntax where `id` will be passed as route parameter.

In the path, we specify route object

```typescript
{path: 'dishdetail/:id', component: DishdetailComponent},
```

To make these kinds of route parameter URLs, we can add `routerLink` in which we can supply an additional `id`.

```html
<a *ngFor="let dish of dishes" [routerLink]="['/dishdetail', dish.id]">Link</a>
```

To retrieve these route params, we need to update component class.

```typescript
... ...
import { DishService } from '../services/dish.service';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

... ...
export class DishdetailComponent implements OnInit {
  dish: Dish;

  // pass route in the constructor
  // location service has a method to go back in the Browser history.
  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    // retrieve id first so that it can be used to get specific dish
    let id = +this.route.snapshot.params['id'];   // noet the + sign before this object.
    this.dish = this.dishservice.getDish(id);
  }

  goBack(): void {
    // use back method to go back to the previous page. This method  is assigned to click event in view.
    this.location.back();
  }
}
```