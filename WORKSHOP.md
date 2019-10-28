# Become a web developer
* Web Developer Roadmap: https://github.com/kamranahmedse/developer-roadmap

# How we work at aaa
* OS: Preferably **Unix** system (Linux or mac OS).
* Javascript flavors: https://2018.stateofjs.com/javascript-flavors/overview/
    * ES6
    * **Typescript**
    * Flow
* 3 most popular frontend frameworks
    * **React**
        * Open source: https://github.com/allaboutapps/aaa-create-react-app-typescript
    * *Angular*
    * Vue
    * Survey: https://2018.stateofjs.com/front-end-frameworks/overview/
* Backend
    * Postgres (https://www.postgresql.org/) via sequelize (https://sequelize.org)
    * REST APIs (https://www.restapitutorial.com/) via hapi (https://hapi.dev/)
    * GraphQL (https://graphql.org/) via Apollo (https://www.apollographql.com/)
    * Open source: https://github.com/allaboutapps/aaa-backend-stack

# Typescript
* Typescript handbook: https://www.typescriptlang.org/docs/home.html
* tldr: JS with static type information.
* Evolved into a modern language comparable to Swift or Kotlin.

## Why this is a good thing
* Tooling!
* Tooling!!! (code completion, code navigation, great IDE via VSCode)
* Compile time checks lead to fewer runtime bugs
* Self documenting code &rarr; essential for teams
* Superset of JS &rarr; valid JS is valid TS
* Use future ES features now (modules, optional chaining, ...)

## Why some people don't like it
* Makes rapid prototyping slower (though you can always use *any*).
* Typings can be hard to read (e.g.https://github.com/DefinitelyTyped/DefinitelyTyped/blob/a9950fcb4a1cf54dcb7fb7ac5d5c60a3cd79a86c/types/eslint/ts3.1/rules/variables.d.ts)
* @types versioning does not match npm package versioning and not always match signature.
* Since it derives from JS sometimes obscure: undefined, any, null, unknown, never, void, object, Object &rarr; WHAT?

# React, Angular (and Vue)

## React
* Rendering only
* You need to add
    * Routing (React router, Reach router)
    * State handling (Flux, Redux, MobX)
    * Network requests (fetch, superagent, axios)
    * i18n (react-intl, react-i18next)
    * (Optional) Various animation libraries
    * (Optional) JSS (reac-jss, styled components)
    * &rarr; more dependencies  
* Consider JS vs TS vs Flow
* Rendering is via JSX (html in JS)
    * Easier to express more dynamic layout problems. Logic and layout both are done in JS.
    * Data binding is simple via JS code/variables and html event handlers.
* Easy to learn
* Setup via create-react-app, rest is done manually
* Project structure is up to you.
* CSS vs JSS vs inline styles.
* Supposedly better performance than Angular.
* Paradigms changed over time:
    * ```React.createClass()``` with Mixins (used to enhance a components functionality).
    * Object oriented approach with ```MyComponent extends React.Component```
    * Now: functional components with hooks and effects instead of state and life cycle methods

## Angular
* Batteries included. It is a full featured application framework. Written in typescript, all of the dependencies from React are covered.
Upgrading to new versions is easy, only Angular needs to be upgraded.
* Rendering is traditional (html, css, js are separated)
    * Layouting and data binding via string interpolation, property binding, own "language" constructs in html *ngIf, *ngFor, directives ...
* Steeper learning curve (also RxJS)
* Powerful CLI for project tasks
* Project structure and naming conventions (module, component, ...) are standardized (if using CLI). Every angular project will look similar.
* Verbose: Every component results in 4 files. Refactoring is tedious.
* AngularJS to Angular 2 transition was very rough. Angular lost a lot of popularity to React during that period. 
Angular 2 was a complete rewrite. Since then fairly stable.

## Vue
* I have no personal experience (yet).
* Template based like Angular, (but also understands JSX, which should be used sparingly).
* Less opinionated than Angular.
* Very popular in China.
* Supposedly better performance than Angular.
* Simpler than Angular.






    
