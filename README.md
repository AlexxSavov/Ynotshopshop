## TITLE: 
Ynotshopshop - Challenge 22

## Tasks

-Added store directory that includes: configuration for the redux store, reducers, actions, and action types

-Took the reducer from GlobalState.js and split it into 3 redux reducers (products, cart, categories)

-Reused the same action types used in the utils/actions 

-Updated App.js to use react-redux Provider instead of the ContextApi Provider

-Updated the every component that was consuming the context api state to use react-redux hooks useDispatch and useSelector

## Acceptance Criteria

GIVEN an e-commerce platform that uses Redux to manage global state

WHEN I review the app’s store

THEN I find that the app uses a Redux store instead of the Context API

WHEN I review the way the React front end accesses the store

THEN I find that the app uses a Redux provider

WHEN I review the way the app determines changes to its global state

THEN I find that the app passes reducers to a Redux store instead of using the Context API

WHEN I review the way the app extracts state data from the store

THEN I find that the app uses Redux instead of the Context API

WHEN I review the way the app dispatches actions

THEN I find that the app uses Redux instead of the Context API

## User Story

AS a senior engineer working on an e-commerce platform

I WANT my platform to use Redux to manage global state instead of the Context API

SO THAT my website's state management is taken out of the React ecosystem



## Acceptance Criteria

GIVEN an e-commerce platform that uses Redux to manage global state

WHEN I review the app’s store

THEN I find that the app uses a Redux store instead of the Context API

WHEN I review the way the React front end accesses the store

THEN I find that the app uses a Redux provider

WHEN I review the way the app determines changes to its global state

THEN I find that the app passes reducers to a Redux store instead of using the Context API

WHEN I review the way the app extracts state data from the store

THEN I find that the app uses Redux instead of the Context API

WHEN I review the way the app dispatches actions

THEN I find that the app uses Redux instead of the Context API

## Created By: 
Alexandre Savov https://github.com/AlexxSavov

## Deployed Application to Heroku
https://ynotshopshop.herokuapp.com/

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
