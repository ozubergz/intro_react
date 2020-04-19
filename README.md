# Intro to React
We are going to make our very own first web application with React.
The theme of our web application is a video game called Final Fantasy VII Remake.

# Goals
 * Design web applications with CSS
 * Learn React main concepts
 * Understand React State and Lifecycle
 * Understand React Components and Props
 * Handling Events

# What is React
 * React is a javascript library (or a framework)
 * Javascript is the programming language of HTML and the web

If you don't know javascipt, it's okay! This course will only cover the important fundamentals of React.
Main fundamentals of React are Handling Events, State and Life Cycle, Rendering Elements and Components.

# First Concept to Understand React

## Rendering an Element into the DOM
At our main index.html file in the public folder, there's a `<div>` with "id called root.
```
<!-- /public/index.html -->

<div id="root"></div>
```
This a 'root' DOM node, it's the place where everything appears (or render) managed by React.

## Update the Rendered Element
Every element that has been created and updated will be rendered by `ReactDOM.render()`.
You pass the `<App />` component to `ReactDOM.render()` for elements to render at the 'root' DOM.
`<App />` is the main Parent component.

```
ReactDOM.render(
    <App />,
    document.getElementbyId('root')
)
```
# Components and Props

## Rendering Components
Components in React are independent reusable pieces. They are like Javascript functions that have properties (normally called 'props'). Think of components as lego pieces with 'properties' (or 'props').

You can write components like this:
```
class Welcome extends React.Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}
```
 * We have a component called `Welcome`
 * The `<Welcome />` component has a `render()` method that renders elements

## Component Props
You can give properties aka 'props' to Components that has been created.

For example:
```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

ReactDOM.render(
  <Welcome name={"Sara"},
  document.getElementById('root')
);
```
Let's explain what's happening:
 1. We call `ReactDOM.render()` with the `<Welcome name="Sara" />` element.
 2. React calls the Welcome component with {name: 'Sara'} as the props.
 3. Our Welcome component returns a `<h1>Hello, Sara</h1>` element as the result.
 4. React DOM efficiently updates the DOM to match `<h1>Hello, Sara</h1>`.




