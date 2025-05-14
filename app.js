const http= require('http');


const server = http.createServer((req, res) =>{
    res.setHeader('content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Node Js</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    console.log(req.method)
});
server.listen(8000)
