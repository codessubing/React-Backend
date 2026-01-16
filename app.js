require('dotenv').config()
const express = require('express')
const connectToDatabase = require('./database')
const Blog = require('./model/blogModel')
const app = express()
connectToDatabase()
Blog()


app.get("/",(req,res) => {
    res.json({
        message:'Hello there '
    })

})

app.get('/about' , (req,res) =>{
    res.json(
        {
            message:'TAhere is about '
        }
    )
})
app.listen(process.env.PORT,()=>{
    console.log('Note jas has started')
})
