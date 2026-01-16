require('dotenv').config()
const express = require('express')
const connectToDatabase = require('./database')
const Blog = require('./model/blogModel')
const app = express()
connectToDatabase()
Blog()
app.use(express.json())


app.get("/",(req,res) => {
    res.json({
        message:'Hello there '
    })

})

app.post("/blog", (req,res) =>{
    console.log(req.body),
    res.status(200).json({
        message:'The model has started the work'
    })
}
)

app.listen(process.env.PORT,()=>{
    console.log('Note jas has started')
})
