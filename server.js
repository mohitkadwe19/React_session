const http = require('http');


const server = http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify({message: 'Hello World mohit!'}));
    res.end();
})


server.listen(3000,()=>{
    console.log('Server is running on port 3000');
});