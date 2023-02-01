# What is lazy loading?

Lazy loading is one of the most common design patterns used in web and mobile development. It is used  to increase an application’s performance by reducing initial loading time. The idea is to load only the relevent components first not the whole application, and then accoeding to users requirement load the other components on-demand dynamically.

For example, we can initially load the components and modules related to user login and registration. Then, we can load the rest of the components based on user navigation.

We cannot feel it in small scale applications But it significantly impacts large-scale applications by reducing the initial load time.


## Advantages of Lazy Loading
- Reduces initial loading time by reducing the bundle size.
- Reduces browser workload.
- Improves application performance in low bandwidth situations.
- Improves user experience at initial loading.
- Optimizes resource usage.
## Disadvantages of Lazy Loading
- Not suitable for small-scale applications.
- Placeholders can slow down quick scrolling.
- Requires additional communication with the server to fetch resources.
- Can affect SEO and ranking.

## How to use lazy loading in react?
React has two features that make it very easy to apply code-splitting and lazy loading to React components: **React.lazy()** and **React.Suspense**

## What is code-splitting?

After the introduction of **ES modules**, transpilers such as **Babel**, and bundlers such as **webpack and Browserify**, we can now write JavaScript applications in a completely modular pattern for easy maintainability. 
Usually, each module is imported and merged into a single file called **bundle.js** by the bundler, then the bundle is included on a webpage to load the entire app. 
As the app grows, the bundle size increases and eventually impacts page load times.

**Code-splitting** is the process of dividing a large bundle of code into multiple bundles that can be loaded dynamically. This will improve performance of the oversized applications.

## Dynamic imports in React

It is way of code splitting. It is done using **import()**. Inside import() we pass the path of the component to be loaded dynamically.
It returns a promise that is fulfilled with the loaded module or rejected if the module can’t be loaded.

## React.lazy

**React.lazy()** is a function that makes it easy to create components that are loaded using dynamic import() but rendered like regular components. 
React.lazy() takes a function as its argument that must return a promise by calling import() to load the component. 
The returned promise resolves to a **module(or compoennet)** with a default export containing the React component.

## React.Suspense 

**React.Suspense** is a component for wrapping lazy components. We can wrap a single lazy component, multiple lazy components, or multiple lazy components with different hierarchy levels with React.Suspense. 

Also it accepts a prop called **fallback** where we can pass a Loading/ waiting message (or we can pass a Loading UI component as well).
This will be displayed until the wrapped lazy component is loaded and rendered.


**Note:** However, sometimes we might face issues due to promise rejections in the React.lazy() function. To overcome such situations, we need to create a **React error boundary** component and wrap the Suspense components using it.