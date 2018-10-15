const http = require('http'); //pull in the http server module
const url = require('url'); //pull in the url module
//pull in the query string module
// NOT USED HERE const query = require('querystring'); 
//pull in our html response handler file
const htmlHandler = require('./htmlResponses.js'); 
//pull in our json response handler file
const jsonHandler = require('./jsonResponses.js');

//set the port. process.env.PORT and NODE_PORT are for servers like heroku
const port = process.env.PORT || process.env.NODE_PORT || 3000;

//key:value object to look up URL routes to specific functions
const urlStruct = {
    '/': htmlHandler.getIndex,
    '/style.css': htmlHandler.getCSS,
    '/cardBac': htmlHandler.getCardBac,
    '/druidCard': htmlHandler.getDruidCard,
    '/questionMark': htmlHandler.getQuestionMark,
    '/druidCardBackground': htmlHandler.getDruidCardBackground,
    '/startButton': htmlHandler.getStartButton,
    '/logo': htmlHandler.getLogo, 
    '/overPowered': jsonHandler.overPowered,
    '/underPowered': jsonHandler.underPowered,
    '/goodCard': jsonHandler.goodCard,
    '/success': jsonHandler.success,
    '/badRequest': jsonHandler.badRequest,
    '/getUsers': jsonHandler.getUsers,
    '/addUsers': jsonHandler.addUsers,
    '/notReal': jsonHandler.notReal,
    '/updated': jsonHandler.updated,
    notFound: jsonHandler.notFound,
};

//handle HTTP requests. In node the HTTP server will automatically
//send this function request and pre-filled response objects.
const onRequest = (request, response) => {
    //parse the url using the url module
    //This will let us grab any section of the URL by name
    const parsedUrl = url.parse(request.url);

    //grab the query parameters (?key=value&key2=value2&etc=etc)
    //and parse them into a reusable object by field name
    //const acceptedTypes = query.parse(parsedUrl.query);


    //check if the path name (the /name part of the url) matches 
    //any in our url object. If so call that function. If not, default to index.
    if (urlStruct[parsedUrl.pathname]) {
        urlStruct[parsedUrl.pathname](request, response, 'application/json');
    } 
    else {
        urlStruct.notFound(request, response, 'application/json');
    }
};

//start HTTP server 
http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.0.1: ${port}`);