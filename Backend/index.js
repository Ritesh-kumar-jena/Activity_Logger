const path=require("path")
const dotenv=require("dotenv").config()
const express=require("express")
const cors=require('cors')
 const { connection } = require("./db")

const port=process.env.port


const app=express()
app.use(cors())
app.use(express.json())
app.get("/",(req,res)=>{
    try {
        res.status(200).send("Wellcom to Activity Logger")
    } catch (error) {
        res.status(404).send(error)
    }
})


app.listen(port,async()=>{
    try {
         await connection
        console.log(`server is running on port:-${port} and connected to Activity Logger database`)
    } catch (error) {
        console.log(error)
    }
})