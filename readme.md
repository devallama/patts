![Patts Logo](https://i.imgur.com/fsmRpjH.png)

# Patts Library - A React styled component pattern library

![Patts Library](https://i.imgur.com/WFjKqkQ.png)

## Who's Patt?

Patts Library (Patts as in Patterns) is a React styled component pattern library. It has taken inspiration from Storybook, however works fairly differently using different technologies and not as feature rich.

## How to start Patting

## Clone from GitHub

Clone the repository to a local folder using `git clone https://github.com/devallama/patts.git`

## Install libraries

Install the required npm libraries by running `npm install` in the root directory.

## Serve

You can start serving out patts by running the command `npm run serve-patts`. This will run the pattern library locally using webpack-dev-server.

## Build

Build the library into a JS file using `npm run build`. This will output the app into '/dist/app.js'.

## Configuring Patts Library

The 'patterns' folder is the root directory for all your components and documentation. Within it is a 'index.js' file which setups up Patts.

Configure() params :

- require.context method of your patts 
- a global wrapper method to wrap all of your components - use this to implement global styling such as fonts, typography and so on.

```jsx
import React from 'react';
import { configure } from 'patts';
import GlobalStyle from './GlobalStyle';

const patts = require.context('./', true, /\patts\.jsx?$/);
const pattFn = pattFn => <React.Fragment>{pattFn()}<GlobalStyle /></React.Fragment>;

configure(patts, pattFn);
```



## Create Patts

Patts are created by exporting a PattsFor method exported from patts. It takes one parameter of a component name. From there, you can add components and documents using the .add() and .addDoc() methods.

Markdown files support React components within them (however they don't support children within the component, so components have to be written as <Header /> etc.). You need to pass an object with the key being the name of the component within the markdown file, and the value being a render function that renders the React component of your choice.

If you want to wrap all patterns from a component in a wrapper function, you can do so by using the .hug() method passing a function. Component scoped styling can be applied this way, similar to global.

```jsx 
export default pattsFor('Header')
    .hug((hugFn) => <div>Header is below vv {hugFn()}</div>)
    .add('Header', () => (
        <Header title="Cool header." />
    ))
    .add('Header with title and description', () => (
        <Header title="Cool header." description="With a description" />
    ))
    .addDoc('Header usage', howTo, { Header: (props) => (<Header {...props} />) });
```

### .add()

​	param 1: Component patt name

​	param 2: Component to render

### .addDoc()

​	param 1: Component doc name

​	param 2: Markdown file

​	param 3: Object containing components to render in markdown

### .hug()

​	param 1: Wrapper function for all patts within the component

# Live demo

<https://patts-90515.firebaseapp.com/Usage/get-started>

