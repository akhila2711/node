const http= require('http');


const server = http.createServer((req, res) =>{

    const url=req.url
    if(url==='/'){
        res.setHeader('content-type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Form data</title></head>');
        res.write("<body><form action='/message' method='post'><input type='text' name='message'><input type='submit' value='send'></input></form></body>");
        res.write('</html>');
        return res.end();
    }
    res.setHeader('content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Node Js</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
   //ROUTING RESPONSE
});

server.listen(8000)
