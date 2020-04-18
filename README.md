# Intro to React
We are going to make our very own first web application with React.
The theme of our web application is a video game called Final Fantasy VII Remake.

# Goals
 * Design web applications with CSS
 * Understand main concepts of React

# What is React
 * React is a javascript library (or a framework)
 * Javascript is the programming language of HTML and the web

If you don't know javascipt, it's okay! This course will only cover the important fundamentals of React.
Main fundamentals of React are Handling Events, State and Life Cycle, Rendering Elements and Components.

# First Concept to Understand React

## Rendering an Element into the DOM
At our main index.html file in the public folder, there's a div with id called root.
```
<!-- /public/index.html -->
<div id="root"></div>
```
This a 'root' DOM node, it's the place where everything appears or render managed by React.

## Update the Rendered Element
Every element that has been created or has been updated will be rendered by `ReactDOM.render`.
You pass the `<App />` component to `ReactDOM.render()` for elements to render at the 'root' DOM.

```
ReactDOM.render(
    <App />,
    document.getElementbyId('root')
)
```