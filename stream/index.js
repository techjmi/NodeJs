// const fs = require("fs");
// const http = require("http");

// const server = http.createServer();

// server.on("request", (req, res) => {
//     const rStream = fs.createReadStream("stream.txt");

//     rStream.on("data", (chunkData) => {
//         res.write(chunkData);
//     });

//     rStream.on("end", () => {
//         res.end();
//     });

//     rStream.on("error", (err) => {
//         console.log(err);
//         res.end("File is not found");
//     });
// });

// // Add the server listening logic
// const PORT = 3000; // You can choose any available port
// server.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });
// pipe method....
const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
    const rStream = fs.createReadStream("stream.txt");

    // Pipe the readable stream to the writable stream (res)
    rStream.pipe(res);

    rStream.on("error", (err) => {
        console.log(err);
        res.end("File is not found");
    });
});


