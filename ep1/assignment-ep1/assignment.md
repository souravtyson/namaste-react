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