
const express = require('express')
const app = express()
app.use(express.json())
const PORT = 3000;

const arr = [];

app.listen(PORT, ()=>{
    console.log("true");
})


// ------------------ singup -----------------------------

app.post("/singup", (req, res)=>{
    let email = req.body.email;
    arr.push(email)
    res.send(arr);
})


// ------------------ login -----------------------------

app.get("/login",(req,res)=>{
   const emails = req.body.email;
   if (arr[0] == emails) {
       res.send("login Successful")
    }
    else{
        res.send("error")
    }
})

