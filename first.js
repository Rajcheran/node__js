const fs = require('fs')

// console.log("hello world");
// fs.writeFileSync('word.txt','nice');

const http = require('http');

// function rqlistener ( req, res){

// }

const server = http.createServer ((req, res) =>{
    //console.log(req); complete details of request nice
    // console.log(req.url,req.method,req.headers); // o/p of required details

    const url= req.url;
    const method = req.method;

    if (url == '/'){
      res.write('<html>');
      res.write('<head><title>my_first_page</title></head>'); 
      res.write('<body><form action="/message" method="POST"><input type="text" name="value"><button>submit</button></form></body>');
      res.write('</html>');
      return res.end();
    }

     res.setHeader('Content-Type','text/html'); //sets header (name, value
     ///
    //  res.write('<html>');
    //  res.write('<head><title>my_first_page</title></head>'); this bunch sends html code as response
    //  res.write('<body><h1>hello world</h1></body>');
    //  res.write('</html>');
    //  res.end(); // this will end the response we cannot write beyond this line otherwise it will create error
    ////
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