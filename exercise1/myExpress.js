const express = require("express");
const app = express();
const port = 3000;


app.get('/', (req,res)=>{
    res.send(`<ul>
        <h1>Landing Page</h1>
            <li>
            <a href="${req.path}quote">Quote</a>
            </li>
            <li>
            <a href="${req.path}legal">Legal</a>
            </li>
            <li>
            <a href="${req.path}about">About</a>
            </li>
            <li>
            <a href="${req.path}contact">Contact</a>
            </li>
        </ul>
            `)
})
//works-------
app.get("/quote", (req,res)=>res.send("“R” is one of the most menacing of sounds. That’s why they call it murder not ‘muckduck’.-Dwight Schrute"))

app.get("/legal", (req,res)=>res.send("These Terms and Conditions of Use this site."))

app.get("/about", (req,res)=>res.send("This is about the website."))

app.get("/contact", (req,res)=>res.send("Contact Me at XXX-XXX-XXXX."))


//set status error
app.get("*",(req,res)=>{
    res.status(404);
    res.send("You have an error")
})

app.listen(port, ()=>{
    console.log(`Listening on port http://localhost:${port}`)
})

