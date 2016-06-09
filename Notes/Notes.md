# AngularJS

### Angular
A client-side Javascript Framework for adding interactivity to HTML.
- Angular helps us to write expressive HTML that can be
  read and understand the behaviors through custom directives.

### Modules
- **Where the application components live.**
- Where we write pieces of Angular application
- Keeps our coding capsulated
- Where we define our dependencies (other modules)
- Ex: `var app = angular.module('store', []);`
    - `angular` --> AngularJS
    - `module` --> new `module`
    - `('store'` --> Application Name
    - `, []);` --> Dependencies
- Wrap up the app with:
  ```
  (function() {

  var app = angular.module('store',[]);

  })();
  ```
- Add a *directive* to the `<html>` tag to include the *Angular app* to the HTML Document.


### Directives
- **HTML annotations that trigger Javascript behaviours.**
- Are attributes inside HTML tags telling the angular to run the module
  whose name is specified as the value of the attribute.
- Ex: `<html ng-app = 'store'>...</html>`
- [Built-in Directives](http://campus.codeschool.com/courses/shaping-up-with-angular-js/level/1/section/3/video/1)
- `ng-class = { key:value }`
    - key is the class you want to add
    - value is the expression that act as a condition for setting the class
- `ng-model`
    - used for dynamically updating a expression with data obtained from `input`s.
- `ng-submit`
    - used to dynamically sumbit a form.
- `ng-include`
    - used to include HTML files into a HTML Document like PHP's include.
    - expects a variable with the name of the file to be included.
    - filename/filepath can be directly put in the attribute by surrounding the filename with "''".
      - Ex: "'product-title.html'"

#### Custom Directives
- Why Directives?
  - Directives allow you to write your HTML that expresses the behavior of your application.
  - Typically, HTML only tells us about the structure of your application but not what it does.
- Types:
  - Template-expanding Directives
    - define a custom tag or attribute that is expanded or replaced.
    - can include Controller logic also, if needed.
  - Directives can also be used for:
    - Expressing complex UI.
    - Calling events and registering event handlers.
    - Reusing common components.
- Defining custom directive code (in app.js):
  ```
  app.directive('productTitle', function(){
    return {
      //A configuration object defining how your directive works.
      restrict: 'E',                        //(1)
      templateUrl: 'product-title.html'     //(2)
    };
  });
  ```
  - **(1)** Type of directive
    - `E` for Element - *can be used for UI Widgets*
    - `A` for Attribute - *can be used for things like mixins which add behaviors to HTML. Ex: tooltip*
    - `EA` for Element as well as Attribute
  - **(2)** Url of the Template *(a HTML Document)* like ***page-title.html***
  - use the directive (in index.html):
    ```
    <product-title></product-title>
    ```
  - **NOTE:** the hypen in HTML translates to camelCase in Javascript.


### Controllers
- **Controls the application behaviour.**
- Controllers are where we define our app's behaviour by defining functions and values.
- Controllers help us get data on to the page.
- Ex: `app.controller('StoreController', function() { });`
    - `app` --> Application Name
    - `controller` --> new `controller`.
        This take 2 parameters:
        - Name of the controller
        - an anonymous function
    - `('StoreController'` --> Controller Name. Controller names should be *camel caps*.
    - `function()` --> an anonymous function
- Add a *directive* to the `<TAGNAME>` in the HTML doc for using the controller.
    - Expressions dealing with a particular *contoller* will not work outside the *`<TAG>`* to which the controller is added.
    - `<div ng-contoller = "StoreController as store">`
        - `ng-controller` --> Directive
        - `"StoreController...` --> Controller Name
        - `...as...` --> keyword
        - `...store"` --> Alias
- [ng-Controller](http://campus.codeschool.com/courses/shaping-up-with-angular-js/level/1/section/2/video/1)

### Expressions
- **How values get displayed within the HTML page.**
- Have 2-way Data Binding, i.e Expressions are re-evaluted when property changes.
- Ex: `{{ 1 + 2 }}` ==> would result `3` in browser
-`$` --> referencing a property of the element.
  -Ex: `{{reviewForm.$valid}}`
  - Here `$` references the property of the form with name reviewForm.
  - `valid` is a angular property of the form.

### Filters
- Helps us to format the output data.
- Structure: {{ data | filter:options }}
- pipe (|) operater: Take the output of the first expression and send it through the second expression.
    - Ex: {{store.price | currency:'&#8377;'}}
        - Take the *value* from the the first expression and send it through the second expression i.e. currency.
        - `currency` is built-in filter that adds localized currency symbol and then required decimals.
        - `&#8377;` for rupees symbol.
- Some:
    - `{{122720131250 | date:MM/dd/yyyy @ h:mma}}`
    - `uppercase`
    - `limitTo:`*NUMBER*
    - `orderBy:'`*PARAMETER*`'`
        - `-` added to the *PARAMETER* will reverse the order.


### Codes
#### Form Validations
- `{{reviewForm.$valid}}` returns true is form is valid.
- *ng* has it's own validations for input type = email, url, number.
  - for `number` we can specify `min=1` and  `max=10`.

#### Others
- in bootstrap `<small>` tag has a `-` before it.
