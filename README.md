# CRUD web Application using Nodejs with express framework and mongodb

Node.js CRUD application based on the MongoDB database design and Express.js framework

## Getting started
#### To get the Node server running locally:
- Clone this repo
- Before installing the dependencies, download and install Node.js.
  
 * ```npm install  ``` to install all required dependencies

* Install MongoDB Compass([Instructions](https://www.mongodb.com/products/compass)) and run it.
* use ```npm test``` or ```npm start``` to run the program locally

* ***NOTE:*** Also make sure to configure mongodb and the port number
  
## Dependencies
* [express](https://www.npmjs.com/package/express) -The server of handling and routing HTTP requests
* [express-handlebars](https://www.npmjs.com/package/express-handlebars): A Handlebars view engine for Express which doesn't suck.
* [body-parser](https://www.npmjs.com/package/body-parser): Parse incoming request bodies in a middleware before your handlers, available under the ```req.body``` property.
* [mongoose](https://www.npmjs.com/package/mongoose): For modeling and mapping MongoDB data to javascript
