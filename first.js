const fs = require('fs')
const http = require('http');

const server = http.createServer ((req, res) =>{

    const url= req.url;
    const method = req.method;

    if (url == '/'){
      res.write('<html>');
      res.write('<head><title>my_first_page</title></head>'); 
      res.write('<body><form action="/message" method="POST"><input type="text" name="value"><button>submit</button></form></body>');
      res.write('</html>');
      return res.end();
    }

     res.setHeader('Content-Type','text/html'); 

  
    if (url =='/message' && method =='POST' ){
        fs.writeFileSync('message.txt','dummy');
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
    }

     res.write('<html>');
     res.write('<head><title>my_first_page</title></head>');
     res.write('<body><h1>hello world</h1></body>');
     res.write('</html>');
     res.end(); 
    

});
 
server.listen(3000);