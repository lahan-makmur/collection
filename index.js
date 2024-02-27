var net = require("net");
var dotenv = require("dotenv");

dotenv.config();

var HOST = process.env.HOST || '127.0.0.1';
var PORT = parseInt(process.env.PORT || '5100');

let requestCount = 0;

var server = net.createServer(function(socket) {
    console.log("Client connected");

    socket.on("data", function(data) {
        console.log("Data from client: " + data);
        socket.write("Thank you, your message is received!");

        requestCount++;
        console.log("Total requests: " + requestCount);
    });

    socket.on("end", function() {
        console.log("Client disconnected");
    });
});

server.listen(PORT, HOST, function() {
    console.log("Server is running at " + HOST + ":" + PORT);
});
