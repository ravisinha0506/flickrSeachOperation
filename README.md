# Flickr Gallery

This is a React component that allows users to search for and view images from Flickr. 

## Features
The gallery component has the following features:

* Photos are returned using the Flickr API for any given keyword
* Flickr results are searchable and paginated

## Components

Any component, including the full gallery module itself, can be replicated simply by rendering the React tag with the appropriate props. For example:

```js
ReactDOM.render(
  <App />,
  document.getElementById("app")
);
```


## Running this Project
###### 1. Clone this repository

Clone this repository to your local machine using the following command:

```
$ git clone https://github.com/ravisinha0506/flickrSeachOperation.git 
```

###### 2. Install dependencies

Install dependencies listed in the `package.json` by running the following command:

```
$ npm install
```

###### 3. Obtain and set environment variables

You will need Flickr API keys to run this project. Obtain them [here](https://www.flickr.com/services/api/). Once you have a public and secret key for the Flickr API, set them in the terminal using the following commands:

```
$ export FLICKR_KEY=[your public key]
$ export FLICKR_SECRET=[your secret key]
```

###### 4. Run the tests

To ensure the project is functioning correctly, run the tests with the following command:

```
$ npm run test
```

###### 5. Start the server

To start the server in development mode, run this command, and navigate to http://localhost:9000/

```
$ npm run dev
```

###### Optional: Run build scripts

If you are making edits to the React source files, you will want to run the webpack build command in another terminal window:

```
$ npm run build
```

And if you are making edits to the SASS files, you will also want to run the following command in another terminal window:

```
$ npm run sass
```
