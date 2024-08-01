console.log("This is the entry point of the app...")
import express from "express"

const app = express();

const port = process.env.PORT || 4000;

app.get('/',(req,res)=>{
    res.send('App Started Successfullly...'

    )
})
app.get('/login',(req,res)=>{
    res.send('App on login page...'

    )
})

app.listen(port,()=>{
    console.log(`App running on port : http://localhost:${port}`)
}) 

