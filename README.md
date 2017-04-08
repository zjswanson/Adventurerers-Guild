# Adventurer's Inn

The Adventurer's Inn is an Angular 2 app built to demonstrate the basic concepts of assembling an app with Angular and incorporating a firebase database.  It uses a simple one-module structure with nested components, an injectable data service to connect to the data store, and exchange of data and actions across components.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.


## Authorship

Adventurer's Inn was created by Zach Swanson on 4/7/17.  

There is no ongoing support planned for Adventurer's Inn, but feel free to email questions and comments to zach.j.swanson@gmail.com

Licensed under MIT license

## Installation

Adventurer's Inn is generously hosted by the fine folks at Firebase.  You can visit at: https://adventurers-guild-cf461.firebaseapp.com

To install an instance locally, first clone the repository from git and run the following commands from the project root in the terminal:

npm install

bower install

Adventurer's Inn requires a connection to a firebase datastore in order to function.  To set up, first create a file at src/app/api-keys.ts with the following contents:

export var masterFirebaseConfig = {
  apiKey: ,
    authDomain: ,
    databaseURL: ,
    projectId: ,
    storageBucket: ,
    messagingSenderId:
}

Then, create a new firebase project, click on the "add firebase to your web app" button, and paste the values it gives you into the above properties.

You can then run a local instance of the app by using the angular CLI to build and serve the app with the "ng serve" command from the project root.

## Development Process

Wireframe at https://wireframe.cc/PUJ5ux

Required module elements:
`Adventurer Model
firebase service
index with header and navbar
Member List component
filter pipes
router
detail component
about component
admin (innkeeper) component
  consider sub-components for forms
`

Production Plan
`Produce each component in order above
integrate with router and data service as necessary
Adventurer Model properties:
Name: string
Title: string
ImageUrl: string
Class: string
Goblins Slain: number
Dragons Slain: number
`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
