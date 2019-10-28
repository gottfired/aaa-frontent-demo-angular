# Prerequisites: Needed software for workshop
* Javascript runtime: *nodejs* (https://nodejs.org/). Version installed for this project (12 LTS)
    * If you already have nodejs installed on your machine and want to switch between versions for this workshop, install *nvm* (https://github.com/nvm-sh/nvm).
    On Windows machines use *nvm-windows* (https://github.com/coreybutler/nvm-windows)
* Editor: *Visual Studio Code* (https://code.visualstudio.com/). Microsoft's typescript IDE (Electron App written in TS)
* Browser: *Chrome* (https://www.google.com/chrome/). Any browser would do, but for consistency in dev tools Chrome is preferred.
* Version control: *git* with *Sourcetree* (https://www.sourcetreeapp.com/). On Linux you can use *GitKraken* (https://www.gitkraken.com/)

# Go to a specific step within the tutorial
* This tutorial is divided into steps marked by tags for easier progress tracking.
* initial clone ```git clone https://github.com/gottfired/aaa-frontent-demo-angular.git```
* Switch to a given step using ```git checkout tags/TAG_NAME```

# 1. tags/after-scaffolding
* **node** = runtime and interactive REPL (every even release is LTS)
    * paradigm: single threaded async
* **npm** = node package manager. Node registry is the largest repository of all languages. Comparable to pip, gems, Maven, NuGet, CocoaPods, ...
* **ng** (Angular CLI) is a binary npm script used for managing Angular projects
    * Either install via npm install -g @angular/cli
    * Then scaffold a new project with ng new aaa-frontend-demo-angular
        * Say "yes" to routing.
        * Use scss (aka SASS)
    * Or use via **npx**: npx -p @angular/cli ng new aaa-frontend-demo-angular
    * npx is a tool for executing binary npm packages without having to install them.
    * Advantage: You can work on different projects using different versions of ng without conflicting with global ng.
* Anatomy of package.json
* After scaffolding start project with
    * npm install (or yarn)
    * npm start

# 2. tags/with-routes
## Routing
* Angular modules: https://angular.io/guide/architecture-modules
    * Encapsulate code into modular packages
    * Different to JS/TS modules, where every module with it's exports is a file
        * Short excursion commonJS (= require) vs ES6 modules (= import)
    * NgModules can be lazy loaded which is relevant for bigger apps
* Define routes in the app's router module. (https://angular.io/guide/router#configuration)
* Create components with ```ng generate component``` (or ```ng g c```) (https://angular.io/cli/generate#component)
    * Compare with the React functional way (```npx create-react-app aaa-frontend-demo-react --typescript```)
    * Add a feed and main component.

## Fonts
* Add a font "Source Sans Pro" in *styles.scss* and define it as global font. (https://fonts.google.com/)
* *styles.scss* is our global stylesheet

# 3. tags/lifecycle
* Lifecycle methods: OnInit, OnDestroy are used to hook into events during a component's life cycle (https://angular.io/guide/lifecycle-hooks#lifecycle-sequence)
* Demonstrate {{stringInterpolation}} for data binding (https://angular.io/guide/template-syntax#interpolation-)

# 4. tags/lifecycle-fixed
* JS this is **NOT** what you are used to. (https://www.w3schools.com/js/js_this.asp)
* Arrow functions: explain ```function f()```vs ```const f = ()=>{}``` and runtime vs compile time this binding. (https://www.w3schools.com/js/js_arrow_function.asp)

# 5. tags/install-material-ui
* What is Material Design? https://material.io/
* We install by
    * adding @angular/cdk and @angular/material to package.json
    * import a theme in styles.scss (important, if not then components will look broken)
* Alternative use ng add @angular/material (since Angular 6)
* Now add a card to our main component (https://material.angular.io/components/card/overview)

# 6. tags/header
* Add a navigation bar using a toolbar (https://material.angular.io/components/toolbar/overview)
* Topic: **SPAs and routing**, routerLink vs href.

# 7. tags/burger
* Responsive apps
* Mobile first
* Media queries
* Material icons: (https://material.io/resources/icons/?style=baseline) = Rich set of ready made icons for apps.
* Burger menu

# 8. tags/sidenav
* For mobile add a sidenav menu (https://material.angular.io/components/sidenav/overview)
* Refactor pages into function to be used by header and sidenav



    


