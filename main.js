const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());


const {selectAllMsg,addmsg}=require("./user");

app.get("/gtmsg",async(req,res)=>{
    const list = await selectAllMsg();
    res.json(list);
});

app.post("/admsg",async(req,res)=>{
    const whatsmsg = req.body;
    await addmsg(whatsmsg);
    res.json({message:"msg sent"});
});


app.listen(4000,()=>console.log("Server Started..."));