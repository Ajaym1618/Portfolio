const http = require('http')
const PORT = 4000
const fs = require('fs')
const path = require('path')


const htmlServer = http.createServer((req, res) => {
    let filepath = path.join(__dirname,'public',req.url === '/' ? 'index.html': req.url);

    const extname = path.extname(filepath)
    let contentType = 'text/html';
    console.log(req.url);
    switch(extname){
        case '.html':
            contentType = 'text/html'
            break;
        case '.css':
            contentType = 'text/css'
            break;
        case '.js':
            contentType = 'text/js'
            break;
        case '.jsx':
            contentType = 'text/jsx'
            break;
        case'.jpg':
            contentType = 'img/jpg'
            break;
        default:
            res.writeHead(404)
            res.end('404 not found');
            return;
    }
    res.writeHead(200, {'content-Type': contentType});

    fs.readFile(filepath, (err, data)=>{
        if (err){
            res.writeHead(404);
            res.end('404 not found')
        } else{
            res.end(data, 'utf8')
        }
    })
})

htmlServer.listen(PORT, err =>{
    if (err) throw console.error(err);
    console.log("port is running successfully in " , PORT);
})