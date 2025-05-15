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
        res.write("<body><form action='/message' method='POST'><input type='text' name='message'><input type='submit' value='send'></input></form></body>");
        res.write('</html>');
        return res.end();
    }
    //Redirecting Response
    if(url==='/message' && method === 'POST'){
        fs.writeFile("message.txt", "DUMMY", (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log("file created");
            res.setHeader('Location', '/');
            res.statusCode = 302;
            return res.end();
        });
    }
    res.setHeader('content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Node Js</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();

});

server.listen(8000)
