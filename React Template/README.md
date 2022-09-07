# Getting Started with ReactJS and D3 

We're using ReactJS to make things a little bit easier. While React has its own syntax and idiosyncrasies, the ability to write code in ES6 syntax, render react components, and leverage the react lifecycle is a major benefit. 

### Boilerplate code 

For the purposes of this class, you can largely ignore many of the files in this repository. Below are the ones that matter: 

1. `package.json` holds all of your dependencies. You can install additional dependencies from the command line `npm install moment`
2. `src/App.js` holds the useEffect hook which gets called once before rendering. This is where you load your data from (CSV, JSON, or an API). In the default template, we import `Scatterplot` from `Components/Scatterplot` and then render that in the return function at the bottom. 
3. `Components/Scatterplot.js` is a component that renders a D3 Scatterplot. The D3 code is written in the useEffect hook to ensure it only gets run once when this component is first created. 

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
