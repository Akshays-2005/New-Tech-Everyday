const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send("Hello from Express");
})

app.post("/contact", (req, res) => {
    if (!req.body.name) {
        return res.status(400).send('Name is required');
    }
    // database stuff
    res.status(200).send(`Thank you ${req.body.name}`);
})

app.post("/login",(req,res)=>{
    if(!req.header('x-auth-token')){
        return res.status(400).send('No token');
    }
    if(req.header('x-auth-token') !== '123456'){
        return res.status(400).send('Not authorised');
    }
    res.send('Logged in!');
})


app.put("/post/:id",(req,res)=>{
    res.json({
        id:req.params.id,
        title:req.body.title
    })
})

app.delete("/post/:id",(req,res)=>{
    res.send(`Post with id ${req.params.id} deleted`);
})

app.listen(5000, () => console.log("Server is running on port 5000"));