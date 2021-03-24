# basic-module-federation-example
Simple example of how Webpack 5 ModuleFederationPlugin can be used for Microfrontends.

Based on the first few sections of this course on Udemy: https://www.udemy.com/course/microfrontend-course/

## How to run it

Go into the products application, install dependencies and start it. It will run on localhost:8081
```
cd products
npm i
npm start
```

Go into the cart application, install dependencies and start it. It will run on localhost:8082
```
cd cart
npm i
npm start
```

Go into the container application, install dependencies and start it. It will run on localhost:8080
```
cd container
npm i
npm start
```

Inspect the network tab to see what is loaded into the browser. 😄
