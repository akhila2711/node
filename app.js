const http= require('http');


const server = http.createServer((req, res) =>{
    res.setHeader('content-type', 'text/html');
    console.log(req.method)
});
server.listen(8000)
