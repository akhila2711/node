const http= require('http');
const fs= require('fs');

const server = http.createServer((req, res) =>{

    const url=req.url
    const method=req.method
       //ROUTING RESPONSE
    if(url==='/'){
        res.setHeader('content-type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Form data</title></head>');
        res.write("<body><form action='/message' method='POST'><input type='text' name='message'><input type='file' name='file'><input type='submit' value='send'></input></form></body>");
        res.write('</html>');
        return res.end();
    }
    //Redirecting Response
    if(url==='/message' && method === 'POST'){
        const body=[];
        req.on('data', (chunk) => {
            // console.log("chunk")
            body.push(chunk);
            console.log(chunk);
        });
    req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();  // Optionally, parse the body if needed
        console.log(parsedBody);
        const message = parsedBody.split('='); // Extract the message from the parsed body

        fs.writeFile("HELLO.txt", message[1] || '', (err) => {
            if (err) {
                console.error("Error writing file:", err);
            }


            // Optionally, you can write a different file here
            // For example, writing a different message to "message.txt"
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
    // Prevent further response handling
    return;
}
res.setHeader('content-type', 'text/html');
res.write('<html>');
res.write('<head><title>Node Js</title></head>');
res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
res.write('</html>');
res.end();

});

server.listen(8000)
