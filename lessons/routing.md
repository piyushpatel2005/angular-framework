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
