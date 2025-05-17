const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    // ROUTING RESPONSE
    if (url === '/') {
        res.setHeader('content-type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Form data</title></head>');
        res.write("<body><form action='/message' method='POST'><input type='text' name='message'><input type='file' name='file'><input type='submit' value='send'></input></form></body>");
        res.write('</html>');
        return res.end();
    }

    // Redirecting Response
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1] || '';

            fs.writeFile("HELLO.txt", message, (err) => {
                if (err) {
                    console.error("Error writing file:", err);
                }
                fs.writeFile("message.txt", "Welcome to home", (err) => {
                    if (err) {
                        console.error("Error writing file:", err);
                    } else {
                        console.log("file created");
                    }
                    res.statusCode = 302;
                    res.setHeader('Location', '/');
                    return res.end();
                });
            });
        });
        return;
    }

    res.setHeader('content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Node Js</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
};

module.exports = requestHandler;