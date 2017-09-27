# Data Binding

Data binding means how the data in component class can be retrieved by the view html file.

There are several kinds of data binding.

1. If you want to move data from component class to view. You can use `{{ propertyname }}`

2. To pass data from parent component to child component, there is property attribute syntax.

For example, say `menu` component has property name `selectedDish: Dish` and `dishdetail` is child component of `menu` component.

```html
<!-- app-menu.component.html -->
<h1>....</h1>
<p>....</p>
<app-dishdetail [dish]="selectedDish"></app-dishdetail>
```

`dishdetail` component will have `dish` property which will get value of `selectedDish` from `menu` component.

- If `dishdetail` is getting property then that property must be decorated with `@Input()` decorator class from `@angular/core` module.

```typescript
import { Component, OnInit, Input } from '@angular/core';

... ...
export class DishDetailComponent implements OnInit {
  @Input()
  dish: Dish;
  ... ....
}
```

3. To pass data from view to component for data handling, we use syntax with parentheses.

```html
<!-- menu.component.html -->
<h1 (click)="onSelect(dish)" *ngFor="let dish of dishes">
  ....
   .....
</h1>
```

Here, when `h1` is clicked, `dish` from `dishes` array is sent to component handler `onSelect`.

```typescript
// menu.component.ts
....
....
@Component(... ... ...)
export class MenuComponent implements OnInit {
  selectedDish: Dish;

  onSelect(dish) {
    this.selectedDish = dish;
  }
  // Dynamically select the dish and then you can update the view based on which dish is selected.
}
```
