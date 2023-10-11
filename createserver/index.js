const { error } = require("console");
const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    console.log(req.url);

    if (req.url === "/") {
        console.log("this is about home section");
        res.end("this is about home section");
    } else if (req.url === "/api") {
        fs.readFile(path.join(__dirname, ".." ,"userAPI", "api.json"), "UTF-8", (err, data) => {
            if (err) {
                console.error(err);
                res.statusCode = 500; // Internal Server Error
                res.end("Internal Server Error");
            } else {
                console.log(data);
                res.end("API data retrieved");
            }
            res.end()
        });
    } else if (req.url === "/contact") {
        res.end("this is about contact section");
    } else {
        res.end("error page does not exist");
    }
});

server.listen(8007, "127.0.0.1", () => {
    console.log("listening at port 8004");
});
