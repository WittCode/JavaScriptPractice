const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.send('Welcome to the root of the application!');
});

app.get('/appRoute', (request, response) => {
    response.send('Welcome to Application GET route.');
});

app.get('/appRoute/appSubRoute', (request, response) => {
    response.send('Application Get subroute.');
});

// //If you do the wildcard first then it will be read first so any page will go to it. Order matters.
// app.get('/*', (request, response) => {  //If page is not found it will go here.
//     response.send('Application wildcard.');
// });

app.listen(8080, () => {    //Server to start listening on port 8080.
    console.log('Server started.');
    console.log('Listening on port 8080.');
});

/******************Router Object*********************/

const router = express.Router();    //You can have lots of routers like a shopping cart router, user router, etc.

router.get('/RouterRoute', (request, response) => {
    response.send('Router route.');
});

app.use('/', router);   //Need to tell the app to use the router object.

