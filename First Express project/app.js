const express = require('express');
// const mongoose = require('mongoose');

const {MongoClient}=require('mongodb');
const morgan=require('morgan');
const url='mongodb://localhost:27017';
const database='testdb';
const client=new MongoClient(url);

async function getData(){
    let result=await client.connect();
    let db=result.db(database);
    let collection = db.collection('blogs');
    // console.log(collection.find({}).toArray());
    let response=await collection.find({}).toArray();
    console.log(response);
}
getData();
// const blog = require('./models/blog')

//express app
const app=express();

// //connect to momgod
// const dbURI='mongodb+srv://test-user:test1234@node-test-1.wgx5i0z.mongodb.net/node-test-1?retryWrites=true&w=majority';
// mongoose.connect(url, {useNewUr1Parser: true,useUnifiedTopology: true})
// .then((result) => {
//     app.listen(3000);
// }).catch((err) => {
//     console.log(err);
// }); 

//register view engine
app.set('view engine','ejs');

//if i want to set different view path
    // app.set('views','my_views');

//listen for request
// app.listen(3000);

app.use(morgan('dev'));
app.use(morgan('tiny'));

app.get('/',(req, res)=>{
    const blogs=[
    {title:"Ioshi finds egges", snippet: "Hello Darkness my old friend"},
    {title:"Her life Sorted", snippet: "Hello Darkness my old friend"},
    {title:"Now She has Everything", snippet: "Hello Darkness my old friend"},
    ];
    // res.send('<p>Home Page</p>');
    // res.sendFile('./views/index.html',{root:__dirname});
    res.render('index',{title:'Home'});
});

app.get('/about',(req, res)=>{
    // res.send('<p>Home Page</p>');
    // res.sendFile('./views/about.html',{root:__dirname});
    res.render('about',{title: 'About'})
});

app.get('/blog/create',(req,res)=>{
    res.render('create',{title:'Create a New Blog'});
});

//redirects
// app.get('/about-us',(req,res)=>{
//     res.redirect('/about');
// });


//404 page
app.use((req,res)=>{
    // res.status(404).sendFile('./views/404.html',{root:__dirname});
    res.status(404).render('404',{title:' 404'});
});