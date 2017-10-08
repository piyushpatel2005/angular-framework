# Angular Framework
    TypeScript based JS framework

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.3.

Run `npm install` to download node modules.

## Angular Lessons

These lessons assume basic knowledge of JavaScript, TypeScript syntax and HTML and CSS. If you don't know TypeScript, please visit [TypeScript repo](https://github.com/piyushpatel2005/TypeScript).

**Table of Contents**

1. [Using angular-cli](lessons/angular-cli.md)
2. [Using Angular Material](lessons/angular-material.md)
3. [Structural Directives](lessons/structural-directives.md)
4. [Managing Classes](lessons/classes.md)
5. [Data Binding](lessons/data-binding.md)
6. [Services](lessons/services.md)
7. [Routing](lessons/routing.md)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

This application uses `json-server`. So, install json-server globally using:

`npm install -g json-server`

Put the data file `db.json` into json-server folder.

Move to the folder to run json-server. To run the server use:

`json-server --watch db.json`

This server will serve the information from db.json and it will be available on the urls mentioned in the console. It usually uses port 3000.

In order to serve images from json-server, use command:

`json-server --watch db.json -d 2000`

It delays response by 2000ms.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


