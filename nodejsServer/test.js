const http = require("http");

// Localhost
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {

    const html = `
        <h1>Hello World!</h1>
        <p>We created our simple server!</p>
    `;

    const html2 = `
        <h1>Hello World from html3!</h1>
        <p>We created our simple server!</p>
    `;

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    if(req.url == "/home"){
        res.write(html);
    }
    else{
        res.write(html2)
    }
    res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})