# Structural Directives

Angular structural directives are added as attrubutes to HTML elements. They help us write small code for large applications.

## NgIf

- used when you want to display or hide an element based on condition.

```html
<div *ngIf="false"></div>     <!-- never displayed -->
<div *ngIf="a > b"></div>     <!-- displayed if a > b -->
<div *ngIf="str == 'Hi'"></div>     <!-- displayed if str == 'Hi' -->
```

## NgSwitch

- used to display different elements based on condition.

```html
<div class="container" [ngSwitch]="myVar">
  <div *ngSwitchCase="'A'">Var is A</div>
  <div *ngSwitchCase="'B'">Var is B</div>
  <div *ngSwitchCase="'C'">Var is C</div>
  <div *ngSwitchDefault>Var is something else</div>
</div>
```

## NgStyle

- used to style components conditionally.

```html
<div [ngStyle]="{color: 'white', 'background-color': 'blue'}">
  Uses fixed white text on blue background
  <!-- You can set conditionally color using color variable in ngStyle -->
</div>
```

## NgClass

- NgClass allows you to dynamically set and change the CSS classes for a given DOM element.

```html
<div [ngClass]="{bordered: false}">This is never bordered</div>
<div [ngClass]="{bordered: true}">This is always bordered</div>
<div [ngClass]="{bordered: isBordered}">
Using object literal. Border {{ isBordered ? "ON" : "OFF" }}
</div>
```

We can also provide multiple classes using array like syntax as shown below.

```html
<div class="base" [ngClass]="['blue', 'round']">
  This will always have a blue background and
  round corners
</div>
```

## NgFor

- used to repeat a given DOM element and pass an element of the array on each iteration.

`*ngFor="let item of items"`

```html
<div class="ui list" *ngFor="let c of cities">
  <div class="item">{{ c }}</div>
</div>
```
