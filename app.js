const express = require('express')
const app = express()


app.get('/',(req,res)=>{
    res.send('<h1>VPC-1, AZ-1a, Subnet-1</h1>')
})

app.listen(3005,()=>{
    console.log('Server is up on port 3005')
})