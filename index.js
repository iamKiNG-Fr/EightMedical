const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000
const {products} = require('./products')
const {testimonials} = require('./testimonials')
const {faq} = require('./faq')

const cors = require('cors')

app.use(cors({
    origin:"*"
}));

app.use(express.static('public'))   

app.get('/', (req, res)=> {
    res.send("Welcome to EightMedical Backend")
})

app.get('/products', (req, res)=> {
    res.json(products)
})

app.get('/testimonials', (req, res)=> {
    res.json(testimonials)
})

app.get('/faq', (req, res)=> {
    res.json(faq)
})

app.listen(PORT, async()=>{
    console.log(`listening on port ${PORT}`);
})