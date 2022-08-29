# Custom password generator v 1.0

![](https://www.ajsevillano.com/pg-screenshot.jpg)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/932b456405d340868271fe85ef9a672f)](https://www.codacy.com/gh/ajsevillano/password-generator/dashboard?utm_source=github.com&utm_medium=referral&utm_content=ajsevillano/password-generator&utm_campaign=Badge_Grade)

The custom password generator is a React.js app for producing random and strong passwords for use daily.

![Secure Password](https://user-images.githubusercontent.com/35935634/174480940-2e787f38-bcc5-4922-b6cc-8298f374bdb6.gif)

## Password generator functionalities

- 🔒 Generate a password between 1 and 30 characters
- ❌ Forces the use that at least 1 filter
- 🔤 Use lowercase, uppercase, symbols, and numbers in your password
- 🎨 Visual security indicator
- 📱 Mobile friendly
- 📋 Copy to clipboard

## Demo

You can find a working demo [HERE](https://lucid-goldberg-c11d8e.netlify.app/)

## Tech

The random password generator is written using Standalone Sass (1.49.0), React.js (v 18.2.0), and bootstrapped with [Create React App](https://github.com/facebook/create-react-app). this app was developed under Node v16.13.1.

Note: This app uses Standalone Sass (global mode),so Sass won't be installed when you clone this app and run npm i.
To install Sass on standalone mode run on your terminal:

```javascript
npm install -g sass
```

Or if you prefer install sass as a dev dependency, run:

```javascript
npm install sass --save-dev
```

## Download,launch & build the App

To start using the App in your local environment, download or clone this repository and run

### `npm init`

This will download all the necessary dependencies and create the necessary files to work. To start the app in the development mode, run:

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
