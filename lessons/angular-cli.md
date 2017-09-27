# Angular CLI

Angular command line interface helps us develop code quickly and efficiently. It helps us develop components and we don't need to do the difficult part of configuration.

Install angular-cli using npm by following command:

`npm install @angular-cli`

You can get help in angular-cli using `ng help`

**Create Fresh application** using angular-cli

Type comamnd:

`ng new <app-name>`.

You can also specify directory and styles language as scss. Check [documentation](https://github.com/angular/angular-cli/wiki) for more details.

When you create a new application, go in to app-folder using:

`cd <app-folder>`

When you create a new app, app the source is located in src folder.

First, `main.ts` file is loaded which imports modules from angular/core.

The main `app.module.ts` file is where the app level configuration takes place. It includes @NgModule() decorator that makes this module as angular module.

The components you import will be included in the imports array. All the components will be decalred in declarations array. When you use angular-cli, it takes care of updating the  `app.module.ts` file when you create new component.

`app` folder contains the application. Here, `app.component` is the main component. Even the components are modular and this is the root component. We can include html in `app.component.html` and it will appear in the rendered application.

We can also create custom components and include them using custom tags.


You can start angular server to run and serve your application using:

`ng serve` command.

## Modular design

Angular is modular and helps us develop small components of an application one step at a time. Component is responsible for all its user-interaction and managing the data and the view. To create a new component use:

`ng generate component <component-name>`

Each component will have several files

 `.component.html`: this is the view for the component
 `.component.ts`: this is the component class written in TypeScript. I consider it as a controller for this component where all the properties and event-handlers exist.
 `.component.css`: this is the stylesheet for the component only.
 `.component.spec.ts`: This is test spec file for the component.

 When we create new component, `.component.ts` file will include `@Component` declarator and this includes selector, that will be used as a tag. It also includes `templateUrl` which defines the template url for this component and styleUrls array that includes stylesheets for this component.

 For example, if you look at generated app, it includes `app-root` selector, which is part of index.html file in the root folder.
