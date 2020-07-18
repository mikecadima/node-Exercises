const express = require("express")
const app = express();

app.get('/', (req,res)=>{
    res.send(`
    <nav>
    <a href="/legal">Legal</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
    </nav>
    <p>
    Its a beautiful day in the neighborhood.
    </p>
     `)
})
app.get('/legal', (req,res)=>{
    res.send(`
    <nav>
    <a href="/legal">Legal</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
    </nav>
    <p>
    It is illegal to steal this site.
    </p>
     `)
})
app.get('/about', (req,res)=>{
    res.send(`
    <nav>
    <a href="/legal">Legal</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
    </nav>
    <p>
    About me.
    </p>
     `)
})
app.get('/contact', (req,res)=>{
    res.send(`
    <nav>
    <a href="/legal" >Legal</a>
    <a href="/about" >About</a>
    <a href="/contact" >Contact</a>
    </nav>
    <p>
    Contact Me.
    </p>
     `)
})

app.listen(5000, ()=>{
    console.log('Im listening')
})