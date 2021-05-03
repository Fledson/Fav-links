const http = require("http");
const data = require("./urls.json");
const URL = require("url")


http.createServer((req, res) => {
 console.log(URL.parse(req.url, true))

}).listen(3333, () => console.log("API is running"));