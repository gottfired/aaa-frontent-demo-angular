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
    * paradigm: single threaded async instead of one thread per network request.
    * similar to browser console
    * access to file system
    * non blocking network requests lead to better performance than thread context switching
    * downside: no vertical scaling, be careful to not block the main thread.
* **npm** = node package manager. Node registry is the largest repository of all languages. Comparable to pip, gems, Maven, NuGet, CocoaPods, ...
    * not constrained to backend, all JS packages are handled via npm.
    * Alternative yarn (https://yarnpkg.com/lang/en/)
* **ng** (Angular CLI) is a binary npm script used for managing Angular projects
    * Either install via npm install -g @angular/cli
    * Then scaffold a new project with ng new aaa-frontend-demo-angular
        * Say "yes" to routing.
        * Use scss (aka SASS)
    * Or use via **npx**: npx -p @angular/cli ng new aaa-frontend-demo-angular
    * npx is a tool for executing binary npm packages without having to install them.
    * Advantage: You can work on different projects using different versions of ng without conflicting with global ng.
* Anatomy of package.json
* What is package-lock.json or yarn.lock?
* After scaffolding start project with
    * npm install (or yarn)
    * npm start
* Short excursion:
    * ts-node: Typescript REPL. https://www.npmjs.com/package/ts-node
    * Easiest way to quickly try out typescript

# 2. tags/with-routes
## Routing
* Angular modules: https://angular.io/guide/architecture-modules
    * Encapsulate code into modular packages
    * Importing module imports everything a module exports
    * Different to JS/TS modules, where every module with its exports is a file
        * Short excursion commonJS (= require) vs ES6 modules (= import). TS uses ES6 syntax.
    * NgModules can be lazy loaded which is relevant for bigger apps
    * &rarr; Explain SPAs and time to first render and why lazy loading is a good thing
        * isomorphic/universal apps via angular/universal or nextjs
        * solution for SEO and first page view, also slow/no script devices.
* Define routes in the app's router module. (https://angular.io/guide/router#configuration)
* Create components with ```ng generate component``` (or ```ng g c```) (https://angular.io/cli/generate#component)
    * Compare with the React functional way (```npx create-react-app aaa-frontend-demo-react --typescript```)
    * Add a feed and main component.
* Short excursion: **SPAs and routing**, routerLink vs href.

## Fonts
* Add a font "Source Sans Pro" in *styles.scss* and define it as global font. (https://fonts.google.com/)
* *styles.scss* is our global stylesheet
* Load fonts via link or as asset. (pros and cons).
    * https://google-webfonts-helper.herokuapp.com/fonts
* Attention: Font licenses. _Always_ make sure you own the license or the font is free.

# 3. tags/lifecycle
* Lifecycle methods: OnInit, OnDestroy are used to hook into events during a component's life cycle (https://angular.io/guide/lifecycle-hooks#lifecycle-sequence)
    * Load resources
    * Init data, attach listeners to dom events, routers, ...
    * Free resources
* Demonstrate {{stringInterpolation}} for data binding (https://angular.io/guide/template-syntax#interpolation-)

# 4. tags/lifecycle-fixed
* JS ```this``` is **NOT** what you are used to. (https://www.w3schools.com/js/js_this.asp)
* Arrow functions: explain ```function f()```vs ```const f = ()=>{}``` and runtime vs compile time this binding. (https://www.w3schools.com/js/js_arrow_function.asp)

# 5. tags/install-material-ui
* What is Material Design? https://material.io/
* We install by
    * adding @angular/cdk and @angular/material to package.json
* React: not built in, several alternatives (most popular is material ui).
* Now add a card to our main component (https://material.angular.io/components/card/overview).
    * Attention: html tag needs module import!
    * Attention: import a theme in styles.scss (important, if not then components will look broken)
* New alternative: use ng add @angular/material (since Angular 6)

# 6. tags/header
* Add a navigation bar using a **toolbar** (https://material.angular.io/components/toolbar/overview)
* Short overview of **flexbox** (https://css-tricks.com/snippets/css/a-guide-to-flexbox/), the swiss army knife of layout. (flex-grow:1 needs outer width).
    * It solves vertical centering! (https://devrant.com/rants/26154/haha, show demo)
* CSS in Angular is isolated. We can reuse class names!

# 7. tags/burger
* Responsive apps (not responsive: https://amazon.de)
    * Good: responsive
    * Ok: specific mobile site (amazon, facebook)
    * Bad: no mobile support (https://dequeuniversity.com/library/responsive/1-non-responsive)
* Mobile first
* Media queries
* Material icons: (https://material.io/resources/icons/?style=baseline) = Rich set of ready made icons for apps.
    * Use as images, svg or font (size vs font-size)
* Burger menu

# 8. tags/sidenav
* For mobile add a **sidenav** menu (https://material.angular.io/components/sidenav/overview)
* Refactor pages into JS accessor to be used by header and sidenav
* *Property binding* via [property]="value"
* *Template reference* via #sidenav (similar to html id)
* *event handler* binding via (click)
* Notice Toolbar height dependant on window width
* Needs BrowserAnimation
* *ngFor: Angular structural directives (https://angular.io/guide/structural-directives)

# 9. tags/sidenav-fixed
* Sidenav behaviour not 100% correct. No grey overlay, clicking outside of nav doesn't close.
* Sidenav demands a specific component structure divided into (https://material.angular.io/components/sidenav/overview#specifying-the-main-and-side-content)
    * sidenav
    * sidenav content
* Refactor to content-container component to match these requirements
* Explain ```@Output``` events for triggering functionality in containing component.

# 10. tags/navigation-pages
* Notice we use pages in header and content-container
* Refactor into service (https://angular.io/guide/architecture-services)
* Cool: Dependency Injection (https://angular.io/guide/architecture-services#dependency-injection-di)

# 11. tags/i18n
* Our first external dependency
* Angular has built in i18n
* We use @ngx-translate instead
    * simpler JSON format which fits better with aaa string exports
    * supports runtime switching
    * Angular i18n uses XML format
    * Angular i18n: ever language currently results in new static build
* translate directive. (Alternatively use translate **Pipe**)
* We show the current route title in the header

# 12. tags/beer-list
* Punk API (https://punkapi.com/documentation/v2). A free beer API!
* HttpClient (https://angular.io/guide/http)
* Observables and RxJS (https://rxjs-dev.firebaseapp.com/).
* We don't use it and convert to promise instead (https://developers.google.com/web/fundamentals/primers/promises).
    * Single thread and async coding
    * Callback hell
    * Promises to the rescue
* Comparison to promises:
    * https://angular.io/guide/comparing-observables
* We use promises with async await (https://javascript.info/async-await).
    * Syntactic sugar over promises
    * Looks nicer, almost like synchronous code
    * Originated AFAIK in C#
* Lots of interface types

# 13. tags/beer-list-mocked
* The API is rate limited
* For demo purposes we switch to mock data

# 14. tags/beer-list-component
* List (https://material.angular.io/components/list/overview)
* Show data for each entry

# 15. tags/beer-detail
## Detail page
* Add a detail page component
* Get route id via URL param snapshot (https://medium.com/@christo8989/angular-6-url-parameters-860db789db85)
* Hide it from header/sidenav (using **filter**)
* Add "not found" page as every respectable app should have. Use string split() to get base url.
* Use ```router.navigate()```to handle selection in (click)
* *ngIf to avoid errors, if not yet loaded
* Render details NOT using material components but using plain html/css
    * Good to know both (skill transferrable to other frameworks)
    * More control (e.g. for accessibility or styling)
    * But not operating within material theming system (can work around that with theming from same source)

## Beers service
* Refactor API handling and app state into beers service (was mobx in React, again no dependency).
* Separate logic and rendering (MVC pattern).
* Store current beer selection in service.
* Typos in html (e.g. beerService instead of beersService do NOT show up at compile time). This is much better in React.
* Load beers, if not available to handle detail reload scenario.
* Error for invalid IDs.
* Deselect ```ngOnDestroy()```

## Global Ui service
* Show errors with snack bar (https://material.angular.io/components/snack-bar/overview)
* Make globally available with globalui service.

# 16. tags/forward-backward
* Add FABs for forward backward navigation (https://material.angular.io/components/button/examples)
* CSS: ```position:fixed``` &rarr; we have to reserve bottom space for the content
* Notice: It doesn't work. We must change url param parsing from snapshot to subscription.

# 17. tags/forward-backward-fixed 
* Fix image shrinking on beer 15 (flex-shrink)
* Fix wrap due to base index 1

# 18. tags/loading-indicator
* Add a spinner gif (e.g. http://ajaxload.info/). Could also use CSS spinner (https://projects.lukehaas.me/css-loaders/) or svg.
* Trigger with simple flag in GlobalUiService.
* Implement sleep() function to fake loading time.

# 19. tags/we-like-beer
* Implemented as mat-icon-button
* Careful! Don't accidentally use it as component directive. It's an attribute directive (https://angular.io/guide/attribute-directives)
* Show like button in list
* Show liked beers on home page

# 20. tags/local-storage
* Reloading the page deletes our likes which is not very useful.
* Options for persistence: https://mattwest.design/choosing-the-best-client-side-storage-technology-for-your-project/
* We use localStorage in combination with JSON.stringify()
* Why local storage? Persistence, offline functionality (e.g. currency converter that works offline)
* To additionally make the site offline available (aka PWAs) use service workers (https://medium.com/@onejohi/offline-web-apps-using-local-storage-and-service-workers-5d40467117b9).


# 21. tags/refactor-services
* We have too many services &rarr; refactor into services folder

# 22. tags/api-init-fixed
* Home page does not show liked beers. Fix: reload on home page ngOnInit()
* Oh NO! Now switching to beer list also loads the beer list again! We refactor the initial load into the ContentContainer.
* General pattern I use
    * Collect components and services that belong together into module
    * Load data in container and make available to children by injecting service.
    * app.component import module

# 23. tags/dialogs
* Minor fix: Close sidenav on selection.
* Intro to modal dialogs (https://material.angular.io/components/dialog/overview)
    * Use case: clear local data
    * MatDialogModule
    * We trigger from NavigationPagesService, so they work in header and sidenav
    * Data is cleared in BeersService
    * Difference to React. 
        * In React you render the dialog invisibly and trigger show flag.
        * In Angular the dialog is instantiated into the DOM with a component.
* In general: Try not to use dialogs often. They cause problems with scrolling on iOS and are problematic
in accessibility scenarios.

# 24. tags/comments
* Minor fix: Add background for spinner, to make it look nicer.
* Forms: https://angular.io/guide/forms-overview
    * Template driven: simpler, offer two way data binding
    * Reactive: more robust, scale better &rarr; we choose this. (https://angular.io/guide/reactive-forms)
* Compare to React. Again dependency needed (Formik or Formsy).
* Add FormGroup with one FormControl (for bigger forms we could use FormBuilder service).
* MatFormFieldModule, MatInputModule (again forgetting e.g. MatInputModule will lead to not so obvious errors)
* Add a built in validator and ```mat-error``` for displaying the error
* Add custom validator for checking leading/trailing spaces
* Add comments to service and persist them.
* Always wrap a form control (aka ```<input>```) within a ```<form>```. It would work without, but you loose submit on enter, which is an accessibility problem.

# 25. tags/login
* Add AuthService, login button and guest login
* Store and persist auth token
* Refactor storage to more general interface

# 26. tags/persist-backend
* Upload our local data (likes and comments) to backend
* Read global data from backend
* Display global likes
* TS index types

# 27. tags/refactor-global-likes
* Fix: global like count is not correct &rarr; reload after postData()
* Notice that global likes are only displayed in list view, not on the home page
* Refactor entry into BeerListItem and reuse component
* @Input() for component parameters (similar to React props)

# 28. tags/1.0
* Finishing touches:
    * Display user uid instead of token
    * Load user profile from backend instead of local storage only

# 29. More topics
* Localization (date, number and currency formats)
* Theming
    * Manipulate style sheet
    * or load different style sheet
    * Use CSS custom properties --main_color: #a00
* Build time configuration via angular.json configurations
* Runtime configuration via config.js
* Deployment and web server configuration (mapping all routes to index.html)
* Routing strategies (https://angular.io/guide/router#appendix-locationstrategy-and-browser-url-styles)
    * BrowserHistory:
        * "normal" URLs
        * can use server side rendering later for universal apps
        * base href for asset location
    * HashHistory: # for sub URLs
        * supports older browser without history.pushState
        * no SSR
        * no web server config necessary
* Testing
    * E.g. entering a value into the comment will lead to updated state
    * or entering a wrong value will display error
* Developing for mobile
    * Using native controls for ```<select>``` or date pickers
    * OS versions (iOS vs Android &rarr; fragmentation)
    * Performance issues
    * Switching back and forth (getting stuck in mobile only views)
    * ```<input>``` types for different on screen keyboards (e.g. tel)
    * Use ```ng serve --host 0.0.0.0``` to test device on LAN against localhost without deployment
* Accessibility
    * https://www.w3.org/WAI/standards-guidelines/aria/
    * Big and complex topic
    * Different screen readers
    * Keyboard only
    * Focus management
    * Popups are hard (focus trap, changes layout)
    * Loading state and dynamic content are problematic
    * Accessible forms (use native input when possible)
    * Don't hide focus highlight because it might be "ugly"
* Animations
    * Many options
    * CSS transitions: nice and easy, but not much control
    * Angular animations (https://angular.io/guide/animations)
    * External libraries (e.g. Greensock https://greensock.com/)
    * Full featured tools with export (https://tumult.com/hype/)








    


