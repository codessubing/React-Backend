const express = require('express')
const app = express()

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
app.listen(3000,()=>{
    console.log('Note jas has started')
})
