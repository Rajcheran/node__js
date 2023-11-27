const fs = require('fs');

const requesthandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url == '/') {
        res.write('<html>');
        res.write('<head><title>my_first_page</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="value"><button type="submit">submit</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const paserbody = Buffer.concat(body).toString();
            const message = paserbody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });

        });
        // res.statusCode = 302;
        // res.setHeader('Location','/');
        // return res.end();
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>my_first_page</title></head>');
    res.write('<body><h1>hello world</h1></body>');
    res.write('</html>');
    res.end();
};

//module.exports = requesthandler; // use only route as var created in first
exports.handler = requesthandler ; /// we have to use route.handler to acess the function


