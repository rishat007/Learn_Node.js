const http=require('http');
const fs=require('fs');
const _=require('lodash');

const server=http.createServer((req,res)=>{
    // console.log(req.url, req.method);

//lodash

    const num=_.random(0,20);
    console.log(num);

    const greet=_.once(()=>{
        console.log('Hello once');
    });

    greet();
    // greet();

// res.setHeader('content-Type','text/plain');
// res.write('hello, Js');
// res.end();
// });

// res.setHeader('content-Type','text/html');
// res.write('<head><link rel="styleseet" herf="#"> </link></head>')
// res.write('<p> Hello Js </p>');
// res.write('<p>  Many More to go </p>');
// res.end();
// });

//set header content type
    res.setHeader('content-Type','text/html');
    let path ='./views/';
switch(req.url){
    case '/':
        path+='index.html';
        res.statusCode=200;
        break;
    case '/about':
        path+='about.html';
        res.statusCode=200;
        break;
    case '/about_me':
        res.setHeader('Location','/about');
    res.statusCode=301;
    break;
    default:
        path+='404.html';
        res.statusCode=404;
        break;
}
//send an html file
    fs.readFile(path,(err, data)=>{
        if(err){
            console.log(err);
            res.end();
        }else{
            // res.write(data);
            // res.end();
            res.end(data);
        }

    });
});

server.listen(3000,'localhost',() =>{
        console.log('listening for request on port 3000');
    });