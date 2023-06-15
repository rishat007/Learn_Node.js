// console.log("Hello From the Other side");
const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/productModel');
const app = express();

app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello Client');
});

app.get('/blog', (req, res) => {
  res.send('Hello from the blog route');
});

app.get('/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/products', async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(200).json(newProduct);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.put('/products/:id', async(req,res)=>{
    try {
        const {id}=req.params;
        const product=await Product.findByIdAndUpdate(id,req.body);
        // we canot fine any data to the database
        if(!product){
            return res.status(404).json({message:'cannot find any product with ID ${id}'});
        }
        const updateProduct=await Product.findById(id);
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message} )
    }
});

app.delete('/products/:id',async(req,res)=>{
    try {
        const {id}=req.params;
        const product=await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message: 'Cannot find any product with ID ${id}'})
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
});

mongoose.set('strictQuery', false);

mongoose
  .connect('mongodb+srv://rishat:Rishat007@node-test-1.wgx5i0z.mongodb.net/crud-api?retryWrites=true&w=majority')
  .then(() => {
    app.listen(3000, () => {
      console.log('Node is running on port: 3000');
    });
    console.log('Connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.log(error);
  });
