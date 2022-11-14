// const { application } = require('express')
const express = require('express')
const products = require('./data/products')

const app = express() //initializes express

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/api/products/:id', (req, res) => {   //route to get single product by its ID
    const product = products.find(p => p._id === req.params.id)
    res.json(product)
})


app.listen(5000, console.log('Server running on Port 5000')) //listens on Port 5000

