const express = require('express')
const app = express();
const mongoose = require('mongoose')
const productRouter = require('./Routes/ProductRoutes')

app.use(express.json())

app.listen('5000', ()=> console.log('server running on 5000'))

mongoose.connect('mongodb+srv://admin:suba2717@cluster0.afk34.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(()=> console.log('database connected..'))
    .catch((err) => console.log(err))

app.use("", productRouter);

app.get('/', (req, res)=>{
   res.send('server reacted...')
 })
