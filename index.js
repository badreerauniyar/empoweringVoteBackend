const express=require('express')
const server=express()


server.get("/",(req,res)=>{
    res.json("Hello Bandri");
})

server.listen(8080,()=>{
 console.log("Listenin..g")
})