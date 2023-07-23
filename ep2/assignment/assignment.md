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

npm install --save-dev parcel

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