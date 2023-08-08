# namaste-react

- Episode 1

## 1. What is Emmet?
    Emmet is a web development tool. It is used to do coding faster efficiently. It generates a code 
    snippet based on some abbreviations. It is available in many IDEs like Visual Studio Code, Atom. 
    It enhances the productivity of web developers by simplyfying the process of writing HTML and CSS code. 
## 2. Difference between a library & framework?
    
    Library is considered to be some set of files which is used to do some specific work. Libraries 
    are usually not responsible for the overall structure or flow of an application.
    
    Framework is a collection of libraries which tells that if you use it some set of functionality 
    will be imported in your project even though you are not using it. It provides a structured way 
    of building applications

## 3. What is CDN? Why do we use it?
    Content Delivery Network(CDN) is used to serve the contents on internet fastly. We use it to serve 
    some static files from CDN server to the client browser.Because it is fast the loading of static content 
    will be quick. It is located in different geographic locations. CDNs are optimized to handle high traffic
    loads and provide better scalability and reliability. As user access some page then CDN closest to them 
    will serve the static files.
## 4. Why is React known as React?
    React is known as react because it is reactive in nature. The term "reactive" refers to the ability of 
    a program to react or respond to changes in its environment. The name "React" reflects the library's fundamental 
    principle of reacting to changes in data and efficiently updating the UI
## 5. What is cross-origin in the script tag?
    The crossorigin attribute in script tags specifies the cross-origin policy for the script. The cross-origin 
    policy determines how the browser handles requests for the script from other domains. The crossorigin 
    attribute is only relevant when the script is retrieved from a third-party server. If the script is 
    retrieved from the same server as the page, the crossorigin attribute will have no effect. 
## 6. What is difference between React and ReactDOM?
    React and ReactDOM are two different JavaScript libraries that are used together to create React 
    applications. React is responsible for creating the UI components, while ReactDOM is responsible 
    for rendering those components to the DOM. ReactDOM act as a bridge between React and browser's DOM.
## 7. What is difference between react.development.js and react.production.js files via CDN?
    
    react.development.js - is used in development environment. this is not minified. in this easy to 
    debug and develop application. features wise - Source maps, warnings, hot reloading
    
    react.production.js - is used in production environment. this is minified file. optimized for performance.

## 8. What are async and defer? 
    
    Async - async attribute in script tag doesn't confirms the order of execution of scripts. whenever
    html parsing of html file happens in browser, then fetching or downloading of script file also 
    happens i.e parallely. Once the fetching of script file completed it stop html parsing and start 
    the execution of script files. After complete execution of script file, html parsing will continue.

    Defer - defer attribute in script tag maintains the order of execution of script files. Whenever 
    html parsing of html file happens in browser, the fetch or downloading of script files also happen 
    i.e. parallely. The execution of script file will happen only when html parsing gets completed.


- Episode 2

## What is `NPM`?

npm is used to download different javascript modules/packages present in the npm repository. It is a 
command used to run from client box to download different packages or modules in there project.
So people call it `node package manager` but in npm documentation the full form of npm is never mentioned.
npm allows to update, install and manage javascript packages

## What is Parcel/Webpack? Why do we need it?

Parcel or Webpack is javascript package that works as a bundler for javascript framework like 
react js or vue or andular. It handles many other features like transpiling of code, minification 
of js files. They provide cross browser support of ui framework. It bundles CSS or images into 
one single js files. This file is then loaded by browser when your web page is opened. 

## What is `.parcel-cache`

.parcel-cache is a hidden folder that gets generated when we run parcel for building or development.
This folder contains information about the files that have been bundled, dependencies that have been resolved
cache of previous build files.

Whenever we run Parcel in development this folder gets regenerated so that you work with the latest version of code.
Whenevr we run Parcel in Production mode this folder doen't get regenerated. But it uses the exist code and rebuild only that 
file which has any change since the last build.

The `.parcel-cache` folder is used by Parcel to improve the performance of your project. When you 
build your project, Parcel will first check the .parcel-cache folder to see if the files that you
need have already been built. If they have, Parcel will simply load the files from the cache, which 
can save a lot of time.


## What is `npx`?

`npx` is a command-line tool that allows you to run Node.js packages without having to install them globally. This can be helpful for running one-off commands or for trying out new packages without cluttering up your system with unnecessary dependencies


## what is difference between `dependencies` and `devDependencies`

dependencies - these are those dependency that is required to run my project if i deployed it in production.

npm install react

devDependencies - these are those dependency that is required while building my project. it actually helps 
in building project or makes my life easy while doing development. these dependency are not shipped to the production build. 

npm install -D parcel

## What is `Tree Shaking`?

Tree shaking is a technique used to remove unused code from JavaScript bundles. This can improve the 
performance of your application by reducing the size of the bundle.
Tree shaking works by analyzing the code in your bundle and identifying any code that is not used. 
This code is then removed from the bundle, which can improve the performance of your application.
This is done by bundler like webpack/ parcel


## What is `Hot Module Replacement`?

Hot module replacement is reflecting of cureently made changes in code to my dev server. While doing 
development. if you made any changes in the code it will reflect that changes immediately to dev server
without any restarting of server required. 


## List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.

1. hot module replacement
2. zero configuration
3. differential bundling
4. cross browser compatibility
5. Minification

`Zero-configuration`: Parcel is a zero-configuration bundler, which means that you don't need 
to write any configuration files to use it. This makes it very easy to get started with Parcel.

`Hot module replacement`: Parcel supports hot module replacement (HMR), which allows you to make
 changes to your code while your application is running. This can be very helpful for debugging 
 and development

`Minification`: it is a process of removing unnecessary characters from JavaScript code, such as 
whitespace, comments, and unused code. This can make your code smaller and faster to load. Parcel 
supports minification by default



## What is `.gitignore`? What should we add and not add into it?

A .gitignore file is a text file that tells git which files and directories should be ignored 
when tracking changes in a project. This can be helpful for excluding files that are not needed 
in the repository.

files like - 

node_modules/
dist/

should not be pushed to the git. so it should be added in gitignore file because these files can be
regenerated while building.


## What is the difference between `package.json` and `package-lock.json`

The package.json file is a manifest file that describes your project's dependencies. It 
lists the packages that your project depends on, as well as their versions. The package.json 
file is used by Node.js to install the dependencies of your project when you run npm install.

The package-lock.json file is a lock file that records the exact versions of the packages 
that were installed in your project. This is useful because it ensures that your project 
always uses the same versions of the packages, even if the versions of the packages change 
in the registry.


## Why should i not modify `package-lock.json`

because it ensures that your project always uses the same versions of the packages, even if 
the versions of the packages change in the registry.



## What is `node_modules`? Is it a good idea to push that on git?


The node_modules folder is a directory that contains all of the JavaScript modules that are 
installed in your project. These modules are used by your project to provide functionality.

No you should not push node_modules to git repository.

## What is the `dist` folder?

dist folder is the folder generated by parcel when running or building  the application.
this contains all bundled files with images being compressed or css being added into the js files.


## What is `browserlists`? 

A browserlist is a file that specifies which browsers your project should support. This is 
important because it allows you to target specific browsers with your code, and it can help
you to avoid using features that are not supported by older browsers.





## Read about different bundlers: vite, webpack, parcel.
## Read about: ^ - caret and ~ - tilda
## Read about Script types in html(MDN Docs)