// dependencies
const http = require("http");
const url = require("url");
const StringDecoder = require("string_decoder").StringDecoder;

const server = http.createServer((req, res) => {
  // get the url and parse it
  let parsedUrl = url.parse(req.url, true);

  // get and trim the path
  let path = parsedUrl.pathname;
  let trimmedPath = path.replace(/^\/+|\?+$/g, "");

  // get the http method
  let method = req.method.toLowerCase();

  // get query string
  let queryStringObj = parsedUrl.path;

  // get the headers as an object
  let headers = req.headers;

  // get the payload if any
  let decoder = new StringDecoder("utf-8");

  // placeholder for incoming string
  let buffer = "";

  // append incoming string to buffer
  req.on("data", (data) => {
    buffer += decoder.write(data);
  });

  // if nothing is appending, send response anyway
  req.on("end", () => {
    buffer += decoder.end();

    // choose the handler this request should go to
    // else, use the `notFound` handler
    let chosenHandler =
      typeof router[trimmedPath] !== "undefined"
        ? router[trimmedPath]
        : handlers.notFound;

    // construct the data object to send to the handler
    let data = {
      trimmedPath,
      queryStringObj,
      method,
      headers,
      payload: buffer,
    };

    // route the request to the handler specified in the router
    chosenHandler(data, (statusCode, payload) => {
      // use the status code called back by the handler,
      // or default to 200
      statusCode = typeof statusCode == "number" ? statusCode : 200;

      // use the payload called back by the handler,
      // or default to an empty obj
      payload = typeof payload == "object" ? payload : {};

      // convert the payload handled to a string
      let payloadString = JSON.stringify(payload);

      // return the response
      res.setHeader("Content-Type", "application/json");
      res.writeHead(statusCode);
      res.end(payloadString);

      console.log("Status Code: ", statusCode);
      console.log("Payload String", payloadString);
    });
  });
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

// define handlers
let handlers = {};

// /sample handler
handlers.hello = (data, callback) => {
  // call back a http status code and a payload
  callback(406, { greet: "Hello World!" });
};

// if handler is not found
handlers.notFound = (data, callback) => {
  // call back a http status code and a payload
  callback(404);
};

let router = {
  hello: handlers.hello,
};
