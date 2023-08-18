import express,{Response,Request}  from "express";
import { json } from "body-parser";
const app = express()
app.use(json())

app.get("/oi",(req: Request,res: Response)=>{
    res.send("bem vindo")
})
app.get("/saymyname",(req: Request,res: Response)=>{
    const {nome}= req.body;
    if (nome == "Loky"){
        res.send("LOOOOOKYYYYY")
    }
    res.status(200).send("bem vindo")
})

app.listen(3001,()=>{
    console.log("api rodando")
})